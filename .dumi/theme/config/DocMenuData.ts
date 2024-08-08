type DocMenuItem = {
  id: number,       // 唯一标识ID menu类型按顺序排列，doc类型需要对应markdown文档中 front matter设置的[id]值
  parentId: number, // 父级ID
  folder: string,   // 归属文件夹（用于归类，只需要标注根目录即可）[例如：/docs/xxx 则 folder: 'xxx']
  type: string,     // 类型 String['menu' - 菜单项 ,'doc' - 文档项]
  title: string,    // 标题 menu类型自定义，doc类型需要对应markdown文档中 front matter设置的[title]值或者自定义
  link: string, // URI 菜单解析时自动生成，显示定义时 声明为 link: '' 即可
}

/**
 * 定义菜单目录 [需要注意菜单顺序]
 *  菜单顺序用于生成侧边栏菜单 以及 底部的导航栏（上一个与下一个）
 */
const DocMenuData: DocMenuItem[] = [
  /**
   * 一级菜单，包含/docs/xxx目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 xxx 相对路径为 /docs/xxx
   *  { id: 1, parentId: 0, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''}
   *  或者
   *  { id: 1, parentId: 0, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 1, parentId: 0, folder: 'first', type: "doc", title: "第一层目录文件", link: ''},
  { id: 2, parentId: 0, folder: 'first', type: "doc", title: "第一层文件-1", link: '' },
  { id: 3, parentId: 0, folder: 'first', type: "doc", title: "第一层文件-2", link: '' },
  { id: 4, parentId: 0, folder: 'first', type: "menu", title: '第二层-1', link: '' },
  { id: 5, parentId: 0, folder: 'first', type: "menu", title: '第二层-2', link: '' },

  /**
   * 二级菜单，包含/docs/xxx/sss目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 sss 相对路径为 /docs/xxx/sss 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 101, parentId: 1, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''}
   *  或者
   *  { id: 101, parentId: 1, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 401, parentId: 4, folder: 'first', type: 'doc', title: '第二层目录文件', link: '' },
  { id: 402, parentId: 4, folder: 'first', type: 'doc', title: '第二层文件 1', link: '' },
  { id: 403, parentId: 4, folder: 'first', type: 'doc', title: '第二层文件 2', link: '' },

  { id: 501, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件', link: '' },
  { id: 502, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件 1', link: '' },
  { id: 503, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件 2', link: '' },
  { id: 504, parentId: 5, folder: 'first', type: 'menu', title: '第三层', link: '' },

  /**
   * 三级菜单，包含/docs/xxx/sss/aaa目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 aaa 相对路径为 /docs/xxx/sss/aaa 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 10101, parentId: 101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''}
   *  或者
   *  { id: 10101, parentId: 101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 50401, parentId: 504, folder: 'first', type: 'doc', title: '第三层目录文件', link: '' },
  { id: 50402, parentId: 504, folder: 'first', type: 'doc', title: '第三层文件 - 1', link: '' },
  { id: 50403, parentId: 504, folder: 'first', type: 'doc', title: '第三层文件 - 2', link: '' },
  { id: 50404, parentId: 504, folder: 'first', type: 'menu', title: '第四层', link: '' },

  /**
   * 四级菜单，包含/docs/xxx/sss/aaa/bbb 目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 bbb 相对路径为 /docs/xxx/sss/aaa/bbb 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 1010101, parentId: 10101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''}
   *  或者
   *  { id: 1010101, parentId: 10101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 5040401, parentId: 50404, folder: 'first', type: 'doc', title: '第四层目录文件', link: '' },
  { id: 5040402, parentId: 50404, folder: 'first', type: 'doc', title: '第四层文件 1', link: '' },
  { id: 5040403, parentId: 50404, folder: 'first', type: 'doc', title: '第四层文件 2', link: '' },
  { id: 5040404, parentId: 50404, folder: 'first', type: 'menu', title: '第五层', link: '' },

  /**
   * 五级菜单，包含/docs/xxx/sss/aaa/bbb/ccc 目录下的.md文件（类型为；doc）以及目录文件夹（类型为：menu）
   * 示例：文件夹名为 ccc 相对路径为 /docs/xxx/sss/aaa/bbb 此处的folder与一级菜单对齐，仍为 xxx
   *  { id: 101010101, parentId: 1010101, folder: 'xxx', type: "doc", title: "内容标题（即.md文件标题）", link: ''}
   *  或者
   *  { id: 101010101, parentId: 1010101, folder: 'xxx', type: "menu", title: "目录名称", link: ''},
   */
  { id: 504040401, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层目录文件', link: '' },
  { id: 504040402, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层文件 1', link: '' },
  { id: 504040403, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层文件 2', link: '' },
];

export {DocMenuData, DocMenuItem};
