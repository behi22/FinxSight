import React, { useState, useEffect, useRef } from 'react';
import { Layout, Button } from 'antd';
import { useLocation } from 'react-router-dom';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
  AppstoreAddOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import Navbar from './Navbar';
import Profile from './Profile';

const { Header, Sider } = Layout;

const AppHeader: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarOverlayVisible, setSidebarOverlayVisible] = useState(false);

  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const showProfile = () => setProfileOpen(true);
  const hideProfile = () => setProfileOpen(false);

  const handleClickOutside = (e: any) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !e.target.closest('.collapsed-btn')
    ) {
      setSidebarVisible(false);
      setSidebarOverlayVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
    setSidebarOverlayVisible((prevState) => !prevState);
  };

  const routeMapping: Record<string, { title: string; icon: JSX.Element }> = {
    '/home': { title: 'Dashboard Home', icon: <HomeOutlined /> },
    '/settings': { title: 'Settings', icon: <SettingOutlined /> },
    '/user': { title: 'User Management', icon: <UserAddOutlined /> },
    '/inventory': {
      title: 'Inventory Management',
      icon: <AppstoreAddOutlined />,
    },
    '/sales': { title: 'Sales Management', icon: <ShopOutlined /> },
  };

  const currentRoute = routeMapping[location.pathname] || routeMapping['/home'];

  const handleMenuClick = () => {
    toggleSidebar(); // Close sidebar on link click
  };

  return (
    <Layout className="app-layout">
      <Sider
        className={`app-sider ${sidebarVisible ? 'visible' : 'collapsed'}`}
        trigger={null}
        ref={sidebarRef}
        width={240}
        style={{ position: 'fixed' }}
      >
        <Navbar collapsed={!sidebarVisible} onMenuClick={handleMenuClick} />
      </Sider>

      <Layout style={{ marginLeft: sidebarVisible ? 240 : 0 }}>
        <Header className="header">
          <div className="header-left">
            <Button
              className="collapsed-btn"
              onClick={toggleSidebar}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span style={{ marginLeft: sidebarVisible ? 8 : 0 }}>
                {!sidebarVisible && 'Menu'}{' '}
              </span>
              {sidebarVisible ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
            <div className="company-logo">FinxSIGHT</div>

            <div
              className="page-title"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {currentRoute.icon && (
                <span style={{ marginRight: 8, fontSize: 18 }}>
                  {currentRoute.icon}
                </span>
              )}
              <span>{currentRoute.title}</span>
            </div>
          </div>

          <div className="header-right">
            <Button onClick={showProfile} icon={<UserOutlined />} />
            <Profile
              open={profileOpen}
              onCancel={hideProfile}
              onCloseSidebar={toggleSidebar}
            />
          </div>
        </Header>
      </Layout>

      {sidebarOverlayVisible && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </Layout>
  );
};

export default AppHeader;
