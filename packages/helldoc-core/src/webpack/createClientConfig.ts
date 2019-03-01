import Config = require("webpack-chain");

import { HellOptions } from "../prepare/resolveOptions";
import { resolveAppPath } from "./util";
import createBaseConfig from "./createBaseConfig";

export default function(ctx: HellOptions): Config {
  const config = createBaseConfig(ctx);

  config.entry("app").add(resolveAppPath("app.tsx"));

  config.plugin("head").use(require("./HeadPlugin"), [
    {
      tags: ctx.siteConfig.head || []
    }
  ]);

  if (process.env.NODE_ENV === "production") {
    config
      .plugin("optimize-css")
      .use(require("optimize-css-assets-webpack-plugin"), [
        {
          canPrint: false,
          cssProcessorOptions: {
            autoprefixer: { disable: true },
            mergeLonghand: false,
            safe: true
          }
        }
      ]);
  } else {
    config.plugin("hmr").use(require("webpack/lib/HotModuleReplacementPlugin"));
  }
  return config;
}
