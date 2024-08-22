import React, {type FC, useState, useEffect} from 'react';
import './index.less';
import {Input, Menu} from "antd";
import useMenu from "../../hooks/useMenu";
import {getOpenIdsById} from "../../tools/DocTools";
import {DocMenuData} from "../../config/DocMenuData";
import {useLocation} from "dumi";
import {SearchOutlined} from "@ant-design/icons";

const Sidebar: FC = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const {items, selectedKeys, openKeys, keyword} = useMenu(searchValue);
  const location = useLocation();
  const [menuData, setMenuData] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState<string[]>([]);
  const [oldOpen, setOldOpen] = useState<string[]>([]);

  // 监听浏览器地址栏的变化 从而刷新组件内容
  useEffect(() => {
    setOpen(openKeys);
    setSelected(selectedKeys);
    setMenuData(items);
    setSearchValue(keyword);
  }, [location, searchValue]);

  return (
    <div>
      <Input
        className={'custom-sidebar-search-input'}
        prefix={<SearchOutlined />}
        placeholder={'目录搜索...'}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        allowClear={true}
      />
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
                setOldOpen(openKeys);
                // 实现手风琴效果
                let lastKey = openKeys[openKeys.length - 1];
                let ids: string[] = [...getOpenIdsById(Number(lastKey)), lastKey]
                let oldArrDisabled = oldOpen.filter(id => !openKeys.includes(id));
                let existIds = (ids || []).filter(id => !oldArrDisabled.includes(id));
                setOpen(existIds);
              } else {
                setOpen(openKeys);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
