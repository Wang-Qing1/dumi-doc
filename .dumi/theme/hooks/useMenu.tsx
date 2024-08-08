import {NavLink, useFullSidebarData, useLocation} from "dumi";
import {DocMenuData, DocMenuItem} from "../config/DocMenuData";
import React from "react";

type MenuItemType = {
  items: any[],
  selectedKeys: string[],
  openKeys: string[],
}
/**
 * 侧边栏菜单 Hooks
 */
const useMenu = (): MenuItemType => {
  const {pathname} = useLocation();
  const fullSidebarData = useFullSidebarData();
  let items: any[] = [];
  let selectedKeys: string[] = [];
  let openKeys: string[] = [];

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
  if (!filterSidebarData || filterSidebarData.length < 1) return {items, selectedKeys, openKeys};

  // 3. 获取菜单项
  const docMenuData = DocMenuData;
  let idSet = new Set<number>();
  (filterSidebarData || []).forEach(item => idSet.add(item.id));
  if (idSet.size < 1) {
    return {items, selectedKeys, openKeys};
  }
  let existsId = idSet.keys().next().value;
  let folderName = docMenuData.filter(item => item.id === existsId)?.[0]?.folder;
  let filterMenuData = docMenuData.filter(item => (item.folder === folderName));
  for (let item of (filterSidebarData || [])) {
    for (let menuItem of filterMenuData) {
      if (item.id === menuItem.id) {
        menuItem.link = item.link;
        break;
      }
    }
  }
  items = getSubItem(filterMenuData, 0);

  // 4. 获取当前选中的key值（对应id）
  let currentMenuItem = filterMenuData.find(item => item.link === pathname);
  if (!currentMenuItem) {
    return {items, selectedKeys, openKeys};
  }
  selectedKeys.push(String(currentMenuItem.id));

  // 5. 获取当前需要开启的key值（对应id）
  openKeys = getOpenIdsById(docMenuData, currentMenuItem.id);

  return {items, selectedKeys, openKeys};
}

/**
 * 依据子节点的ID 查找所有符合要求的父类节点ID
 * @param id
 */
function getOpenIdsById(docMenuData: DocMenuItem[], id: number) : string[]{
  let current = docMenuData.find(item => item.id === id);
  if (!current) {
    return [];
  }
  let parent = docMenuData.find(item => item.id === current.parentId);
  if (!parent) {
    return [];
  }
  return [...getOpenIdsById(docMenuData, parent.id), String(parent.id)];
}

/**
 * 构建树状结构 菜单数据
 * @param data
 * @param parentId
 */
function getSubItem (data: DocMenuItem[], parentId: number): any[] {
  return data.filter(item => item.parentId === parentId)
    .map(item => {
      let {id, parentId, type, title, link} = item;
      let key = id;
      let label = (type === 'menu') ? title : (
        <NavLink to={link} title={title} end>
          {title}
        </NavLink>
      );
      let children: null | any[] = (type === 'menu') ? getSubItem(data, id) : null;
      if (type === 'menu' && children?.length === 0) return false;
      if (children && children.length > 0) {
        return (type === 'menu') ? {key, label, children} : {key, label, link, children};
      }
      return (type === 'menu') ? {key, label} : {key, label, link};
    }).filter(Boolean);
}

export default useMenu;
