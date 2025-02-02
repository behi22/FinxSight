import React from 'react';
import { Menu, Divider } from 'antd';
import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  ShopOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    if (key === 'home') {
      navigate('/home');
    } else if (key === 'settings') {
      navigate('/settings');
    } else if (key === 'user') {
      navigate('/user');
    } else if (key === 'sales') {
      navigate('/sales');
    } else if (key === 'inventory') {
      navigate('/inventory');
    }
  };

  return (
    <div style={{ width: 240, height: '100%' }}>
      <h3>Menu</h3>
      <Divider />

      <Menu
        mode="inline"
        defaultSelectedKeys={['home']} // pre-select 'Home' item
      >
        <Menu.Item
          key="home"
          onClick={() => handleMenuClick('home')}
          icon={<HomeOutlined />}
        >
          Dashboard Home
        </Menu.Item>
        <Menu.Item
          key="settings"
          onClick={() => handleMenuClick('settings')}
          icon={<SettingOutlined />}
        >
          Settings
        </Menu.Item>
        <Divider />
        <Menu.Item
          key="user"
          onClick={() => handleMenuClick('user')}
          icon={<UserOutlined />}
        >
          User Management
        </Menu.Item>
        <Menu.Item
          key="inventory"
          onClick={() => handleMenuClick('inventory')}
          icon={<AppstoreAddOutlined />}
        >
          Inventory Management
        </Menu.Item>
        <Menu.Item
          key="sales"
          onClick={() => handleMenuClick('sales')}
          icon={<ShopOutlined />}
        >
          Sales Management
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
