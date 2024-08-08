import {DocMenuData} from "../config/DocMenuData";

/**
 * 依据子节点的ID 查找所有符合要求的父类节点ID
 * @param id
 */
function getOpenIdsById(id: number): string[] {
  let current = DocMenuData.find(item => item.id === id);
  if (!current) {
    return [];
  }
  let parent = DocMenuData.find(item => item.id === current.parentId);
  if (!parent) {
    return [];
  }
  return [...getOpenIdsById(parent.id), String(parent.id)];
}

export {getOpenIdsById}

