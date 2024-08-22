import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'build',
  // 主题配置项
  themeConfig: {
    name: 'Doc-Base',
    logo: '/logo.png',
    lastUpdated: false, // 文档最后更新时间
    footer: false, // 页脚内容
    prefersColor: {
      default: "light",
      switch: false,
    },
    nav: [
      { title: '数据库', link: '/database/database' },
      { title: '编程语言', link: '/language/language' },
      { title: '操作系统', link: '/os/os' },
    ],
  },
});
