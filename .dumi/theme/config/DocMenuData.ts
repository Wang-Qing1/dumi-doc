type DocMenuItem = {
  id: number,       // 唯一标识ID menu类型按顺序排列，doc类型需要对应markdown文档中 front matter设置的[id]值
  parentId: number, // 父级ID
  folder: string,   // 归属文件夹（用于归类，只需要标注根目录即可）[例如：/docs/xxx 则 folder: 'xxx']
  type: string,     // 类型 String['menu' - 菜单项 ,'doc' - 文档项]
  title: string,    // 标题 menu类型自定义，doc类型需要对应markdown文档中 front matter设置的[title]值或者自定义
  link: string | null, // URI 菜单解析时自动生成，显示定义时 声明为 link: null 即可
}

const DocMenuData: DocMenuItem[] = [
  // 第一级目录
  { id: 1, parentId: 0, folder: 'first', type: "doc", title: "第一层目录文件", link: null},
  { id: 2, parentId: 0, folder: 'first', type: "doc", title: "第一层文件-1", link: null },
  { id: 3, parentId: 0, folder: 'first', type: "doc", title: "第一层文件-2", link: null },
  { id: 4, parentId: 0, folder: 'first', type: "menu", title: '第二层-1', link: null },
  { id: 5, parentId: 0, folder: 'first', type: "menu", title: '第二层-2', link: null },
  { id: 6, parentId: 0, folder: 'database', type: 'doc', title: '数据库', link: null},
  { id: 7, parentId: 0, folder: 'database', type: 'doc', title: '数据库', link: null},
  { id: 8, parentId: 0, folder: 'database', type: 'doc', title: '数据库', link: null},
  // { id: 9, parentId: 0, folder: 'database', type: 'doc', title: '数据库', link: null},
  // { id: 10, parentId: 0, folder: 'database', type: 'doc', title: '数据库', link: null},

  // 第二级目录
  { id: 401, parentId: 4, folder: 'first', type: 'doc', title: '第二层目录文件', link: null },
  { id: 402, parentId: 4, folder: 'first', type: 'doc', title: '第二层文件 1', link: null },
  { id: 403, parentId: 4, folder: 'first', type: 'doc', title: '第二层文件 2', link: null },

  { id: 501, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件', link: null },
  { id: 502, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件 1', link: null },
  { id: 503, parentId: 5, folder: 'first', type: 'doc', title: '第二层第二目录文件 2', link: null },
  { id: 504, parentId: 5, folder: 'first', type: 'menu', title: '第三层', link: null },

  // 第三级目录
  { id: 50401, parentId: 504, folder: 'first', type: 'doc', title: '第三层目录文件', link: null },
  { id: 50402, parentId: 504, folder: 'first', type: 'doc', title: '第三层文件 - 1', link: null },
  { id: 50403, parentId: 504, folder: 'first', type: 'doc', title: '第三层文件 - 2', link: null },
  { id: 50404, parentId: 504, folder: 'first', type: 'menu', title: '第四层', link: null },

  // 第四级目录
  { id: 5040401, parentId: 50404, folder: 'first', type: 'doc', title: '第四层目录文件', link: null },
  { id: 5040402, parentId: 50404, folder: 'first', type: 'doc', title: '第四层文件 1', link: null },
  { id: 5040403, parentId: 50404, folder: 'first', type: 'doc', title: '第四层文件 2', link: null },
  { id: 5040404, parentId: 50404, folder: 'first', type: 'menu', title: '第五层', link: null },

  // 第五级目录
  { id: 504040401, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层目录文件', link: null },
  { id: 504040402, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层文件 1', link: null },
  { id: 504040403, parentId: 5040404, folder: 'first', type: 'doc', title: '第五层文件 2', link: null },
];

export {DocMenuData, DocMenuItem};