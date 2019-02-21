import { writeTemp } from "./util";
import resolveOptions from "./resolveOptions";
import genRegistrationFile from "./genRegistrationFile";
import { resolve } from "path";

export default async function prepare(sourceDir: string) {
  // 1. options
  const options = await resolveOptions(sourceDir);
  // 2. registed router
  const componentCode = await genRegistrationFile(options);
  // 3. gen router files
  // const routesCode = await genRoutesFile(options);
  // 4. gen siteData
  const dataCode = `export const siteData = ${JSON.stringify(
    options.siteData,
    null,
    2
  )}`;
  await writeTemp(
    resolve(options.sourceDir, "siteData.js"),
    [componentCode, dataCode].join("\n\n")
  );

  return options;
}
