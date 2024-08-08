import React, {type FC, useState, useEffect} from 'react';
import './index.less';
import {Menu} from "antd";
import useMenu from "../../hooks/useMenu";
import {getOpenIdsById} from "../../tools/DocTools";
import {DocMenuData} from "../../config/DocMenuData";
import {useLocation} from "dumi";

const Sidebar: FC = () => {
  const {items, selectedKeys, openKeys} = useMenu();
  const location = useLocation();
  const [menuData, setMenuData] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<string[]>([]);

  // 监听浏览器地址栏的变化 从而刷新组件内容
  useEffect(() => {
    setOpen(openKeys);
    setSelected(selectedKeys);
    setMenuData(items);
  }, [location]);

  return (
    <div className={"custom-theme-sidebar"}>
      {menuData && menuData.length > 0 && (
        <Menu
          className={'custom-theme-sidebar-menu'}
          mode={"inline"}
          items={menuData}
          selectedKeys={selected}
          openKeys={open}
          onSelect={({selectedKeys}) => {
            // 手风琴效果
            let cur = DocMenuData.find(item => item.id === (selectedKeys && selectedKeys[0] && Number(selectedKeys[0])));
            if (cur && cur.type == 'doc' && cur.parentId === 0) {
              setOpen([]);
            }
            setSelected(selectedKeys);
          }}
          onOpenChange={openKeys => {
            if (openKeys && openKeys.length > 0) {
              // 实现手风琴效果
              let lastKey = openKeys[openKeys.length - 1];
              setOpen([...getOpenIdsById(Number(lastKey)), lastKey]);
            } else {
              setOpen(openKeys);
            }
          }}
        />
      )}
    </div>
  );
};

export default Sidebar;
