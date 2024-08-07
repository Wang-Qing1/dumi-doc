import { useLocation, useFullSidebarData  } from 'dumi';
import React, {type FC, useState} from 'react';
import './index.less';
import {buildMenuItems, filterSidebarByRootPath} from "../../tools/DocTools";
import {Menu} from "antd";

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const rootPath = "/" + pathname.split('/')[1];
  const fullSidebarData = useFullSidebarData();
  if (!fullSidebarData) return null;

  let filterSidebarData = filterSidebarByRootPath(rootPath, fullSidebarData);
  if (!filterSidebarData || filterSidebarData.length < 1) return null;

  let items = buildMenuItems(filterSidebarData);

  if (!items || items.length < 1) return null;
  let defaultSelectedKeys = [String(items[0].key)];

  return (
    <div className={"custom-theme-sidebar"}>
      <Menu
        className={'custom-theme-sidebar-menu'}
        mode={"inline"}
        items={items}
        selectedKeys={(!selectedKeys || selectedKeys.length < 1) ? defaultSelectedKeys : selectedKeys}
        onSelect={({selectedKeys}) => {
          setSelectedKeys(selectedKeys);
        }}
      />
    </div>
  );
};

export default Sidebar;
