import {DocMenuData} from "../config/DocMenuData";
import {useLocation} from "@@/exports";
import {useFullSidebarData} from "dumi";

const useFooterNav = () => {
  const {pathname} = useLocation();
  const fullSidebarData = useFullSidebarData();

  // 1. 获取当前路径的根路径
  const rootPath = "/" + pathname.split('/')[1];

  // 2. 过滤侧边栏配置中匹配当前路径的数据
  let filterSidebarData = [];
  for (let key of Object.keys(fullSidebarData)) {
    if (key.startsWith(rootPath)) {
      let items = fullSidebarData[key];
      for (let item of (items || [])) {
        if (item && item.children && item.children.length > 0) {
          for (let child of (item.children || [])) {
            child.id = child.frontmatter && child.frontmatter.id;
            filterSidebarData.push(child);
          }
        }
      }
    }
  }
  if (!filterSidebarData || filterSidebarData.length < 1) return {};

  // 3. 匹配连接并且过滤出仅doc类型的菜单项
  const docMenuData = DocMenuData;
  let idSet = new Set<number>();
  (filterSidebarData || []).forEach(item => idSet.add(item.id));
  if (idSet.size < 1) {
    return {};
  }
  let existsId = idSet.keys().next().value;
  let folderName = docMenuData.filter(item => item.id === existsId)?.[0]?.folder;
  let filterMenuData = docMenuData.filter(item => (item.folder === folderName && item.type === 'doc'));
  for (let item of (filterSidebarData || [])) {
    for (let menuItem of filterMenuData) {
      if (item.id === menuItem.id) {
        menuItem.link = item.link;
        break;
      }
    }
  }
  if (!filterMenuData || filterMenuData.length < 1) {
    return {};
  }

  // 获取上一个、下一个
  let current = filterMenuData.findIndex(item => item.link === pathname);
  return {
    prevItem: filterMenuData[current - 1],
    nextItem: filterMenuData[current + 1],
  }
}


export default useFooterNav;
