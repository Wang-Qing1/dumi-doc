import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build',
  // 主题配置项
  themeConfig: {
    name: 'dumi-doc',
    lastUpdated: false, // 文档最后更新时间
    footer: false, // 页脚内容
    prefersColor: {
      default: "light",
      switch: false,
    },
    nav: [
      { title: '第一层目录', link: '/first/first' }
    ],
  },
});
