import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build',
  // 主题配置项
  themeConfig: {
    name: 'dumi-doc',
    lastUpdated: false, // 文档最后更新时间
    footer: false, // 页脚内容
    prefersColor: {
      default: "auto"
    },
    nav: [
      { title: '数据库', link: '/database' },
      { title: '编程语言', link: '/language' },
      { title: '操作系统', link: '/os' }
    ],
  },
});