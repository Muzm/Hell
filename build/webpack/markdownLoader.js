"use strict";
exports.__esModule = true;
var loader_utils_1 = require("loader-utils");
var util_1 = require("../util");
function MarkdownLoader(src) {
    var markdown = loader_utils_1.getOptions(this).markdown;
    var frontmatter = util_1.parseFrontmatter(src);
    var content = frontmatter.content;
    var html = markdown(content);
    var res = "import * as React from 'react';\n" +
        ("export default () => <div className='content' dangerouslySetInnerHTML={{ __html: `" + html + "` }}></div>;");
    return res;
}
exports["default"] = MarkdownLoader;
