type DocMenuItem = {
  id: number,       // 唯一标识ID menu类型按顺序排列，doc类型需要对应markdown文档中 front matter设置的[id]值
  parentId: number, // 父级ID
  folder: string,   // 归属文件夹（用于归类，只需要标注根目录即可）[例如：/docs/xxx 则 folder: 'xxx']
  type: string,     // 类型 String['menu' - 菜单项 ,'doc' - 文档项]
  title: string,    // 标题 menu类型自定义，doc类型需要对应markdown文档中 front matter设置的[title]值或者自定义
  link: string, // URI 菜单解析时自动生成，显示定义时 声明为 link: '' 即可
}

/**
 * 定义菜单目录 [需要注意菜单顺序 同一层级的结构与实际目录结构相同即可]
 *  菜单顺序用于生成侧边栏菜单 以及 底部的导航栏（上一个与下一个）
 */
const DocMenuData: DocMenuItem[] = [
  /**
   * 一级菜单，包含/docs/xxx目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 xxx 相对路径为 /docs/xxx
   *  { id: 1, parentId: 0, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''},
   *  或者
   *  { id: 1, parentId: 0, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 1, parentId: 0, folder: 'database', type: "doc", title: "数据库", link: ''},
  { id: 2, parentId: 0, folder: 'database', type: "doc", title: "测试文件1", link: ''},
  { id: 3, parentId: 0, folder: 'database', type: "doc", title: "测试文件2", link: ''},
  { id: 4, parentId: 0, folder: 'database', type: "menu", title: "关系型数据库", link: ''},
  { id: 5, parentId: 0, folder: 'database', type: "menu", title: "非关系型数据库", link: ''},

  { id: 6, parentId: 0, folder: 'language', type: "doc", title: "编程语言", link: ''},
  { id: 7, parentId: 0, folder: 'language', type: "menu", title: "后端语言", link: ''},
  { id: 8, parentId: 0, folder: 'language', type: "menu", title: "前端语言", link: ''},

  { id: 9, parentId: 0, folder: 'os', type: "doc", title: "操作系统", link: ''},
  { id: 10, parentId: 0, folder: 'os', type: "doc", title: "Windows", link: ''},
  { id: 11, parentId: 0, folder: 'os', type: "doc", title: "Linux", link: ''},
  { id: 12, parentId: 0, folder: 'os', type: "doc", title: "IOS", link: ''},

  /** 一级菜单结束  */

  /**
   * 二级菜单，包含/docs/xxx/sss目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 sss 相对路径为 /docs/xxx/sss 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 101, parentId: 1, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''},
   *  或者
   *  { id: 101, parentId: 1, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 401, parentId: 4, folder: 'database', type: "doc", title: "MySQL", link: ''},
  { id: 402, parentId: 4, folder: 'database', type: "doc", title: "PostgreSQL", link: ''},

  { id: 501, parentId: 5, folder: 'database', type: "doc", title: "Redis", link: ''},
  { id: 502, parentId: 5, folder: 'database', type: "menu", title: "层级测试Demo", link: ''},
  { id: 503, parentId: 5, folder: 'database', type: "menu", title: "层级测试Test", link: ''},

  { id: 701, parentId: 7, folder: 'language', type: "doc", title: "Java", link: ''},
  { id: 702, parentId: 7, folder: 'language', type: "doc", title: "Python", link: ''},

  { id: 801, parentId: 8, folder: 'language', type: "doc", title: "JavaScript", link: ''},
  { id: 802, parentId: 8, folder: 'language', type: "doc", title: "TypeScript", link: ''},

  /** 二级菜单结束  */

  /**
   * 三级菜单，包含/docs/xxx/sss/aaa目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 aaa 相对路径为 /docs/xxx/sss/aaa 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 10101, parentId: 101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''},
   *  或者
   *  { id: 10101, parentId: 101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 50201, parentId: 502, folder: 'database', type: "doc", title: "层级Demo1", link: ''},
  { id: 50202, parentId: 502, folder: 'database', type: "doc", title: "层级Demo2", link: ''},

  { id: 50301, parentId: 503, folder: 'database', type: "doc", title: "层级Test1", link: ''},
  { id: 50302, parentId: 503, folder: 'database', type: "doc", title: "层级Test2", link: ''},

  /** 三级菜单结束  */

  /**
   * 四级菜单，包含/docs/xxx/sss/aaa/bbb 目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 bbb 相对路径为 /docs/xxx/sss/aaa/bbb 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 1010101, parentId: 10101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''},
   *  或者
   *  { id: 1010101, parentId: 10101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */

  /** 四级菜单结束  */

  /**
   * 五级菜单，包含/docs/xxx/sss/aaa/bbb/ccc 目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 ccc 相对路径为 /docs/xxx/sss/aaa/bbb 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 101010101, parentId: 1010101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''},
   *  或者
   *  { id: 101010101, parentId: 1010101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */

  /** 五级菜单结束  */

];

export {DocMenuData, DocMenuItem};
