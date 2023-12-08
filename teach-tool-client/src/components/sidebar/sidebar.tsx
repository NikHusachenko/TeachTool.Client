'use client'

import React from 'react';

import {
  SettingFilled,
  TeamOutlined,
  MessageOutlined,
  ScheduleFilled,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const items = [
  {
    key: '1',
    icon: React.createElement(SettingFilled),
    label: 'Profile',
    smth: 'fdslg'
  },
  {
    key: '2',
    icon: React.createElement(ScheduleFilled),
    label: 'Schedule',
  },
  {
    key: '3',
    icon: React.createElement(UserOutlined),
    label: 'Pupils',
  },
  {
    key: '4',
    icon: React.createElement(TeamOutlined),
    label: 'Groups',
  },
  {
    key: '5',
    icon: React.createElement(MessageOutlined),
    label: 'Messages',
  }
];

const Sidebar: React.FC = () => {
  return (
    <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu onClick={(item) => { console.log(item) }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
  );
};

export default Sidebar;