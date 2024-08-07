import React from "react";
import {DocMenuData, DocMenuItem} from "../config/DocMenuData";
import {NavLink} from "dumi";

/**
 * 获取菜单配置项
 */
function buildMenuItems(filterSidebarData: any[] | null ) {
  const docMenuData = DocMenuData;
  let idSet = new Set<number>();
  (filterSidebarData || []).forEach(item => idSet.add(item.id));
  if (idSet.size < 1) {
    return null;
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
  let menuTree = getSubItem(filterMenuData, 0);
  return menuTree;
}

/**
 * 依据根路径过滤全局侧边栏配置中符合要求的数据
 * @param rootPath
 * @param fullSidebar
 */
function filterSidebarByRootPath(rootPath: string, fullSidebar: any[]){
  if (!rootPath || !fullSidebar || Object.keys(fullSidebar).length < 1) {
    return null;
  }
  let filterSidebarData = [];
  for (let key of Object.keys(fullSidebar)) {
    if (key.startsWith(rootPath)) {
      let items = fullSidebar[key];
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
  return filterSidebarData;
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

export {buildMenuItems, filterSidebarByRootPath};
