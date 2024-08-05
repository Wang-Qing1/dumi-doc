"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dumi_1 = require("dumi");
exports.default = (0, dumi_1.defineConfig)({
    outputPath: 'build',
    // 主题配置项
    themeConfig: {
        name: 'dumi-doc',
        lastUpdated: false, // 文档最后更新时间
        footer: false, // 页脚内容
        prefersColor: {
            default: "auto"
        }
    },
});
