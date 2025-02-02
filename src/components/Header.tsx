import React, { useState } from 'react';
import { Layout, Button, Modal } from 'antd';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Navbar from './Navbar';
import Profile from './Profile';

const { Header, Sider } = Layout;

const AppHeader: React.FC<{ pageTitle: string; pageIcon: JSX.Element }> = ({
  pageTitle,
  pageIcon,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // Profile modal open state
  const [navbarOpen, setNavbarOpen] = useState(false); // Navbar modal open state

  const showProfile = () => setProfileOpen(true);
  const hideProfile = () => setProfileOpen(false);

  const showNavbar = () => setNavbarOpen(true);
  const hideNavbar = () => setNavbarOpen(false);

  return (
    <Layout className="app-layout">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={240}
      >
        <Button onClick={showNavbar} className="navbar-toggle-btn">
          <MenuFoldOutlined /> Menu
        </Button>
        <Modal
          open={navbarOpen}
          onCancel={hideNavbar}
          footer={null}
          width={250}
        >
          <Navbar />
        </Modal>
      </Sider>

      <Layout>
        <Header
          className="header"
          style={{ backgroundImage: 'url(/your-background-image.jpg)' }}
        >
          <div className="header-content">
            <div className="header-left">
              <Button
                className="collapsed-btn"
                onClick={() => setCollapsed(!collapsed)}
              >
                <MenuUnfoldOutlined />
              </Button>
              <div className="company-logo">FinxSIGHT</div>
              <div className="page-title">
                {pageIcon} {pageTitle}
              </div>
            </div>
            <div className="header-right">
              <Button
                onClick={showProfile}
                icon={<UserOutlined />}
                className="profile-btn"
              >
                Profile
              </Button>
              <Modal
                title="Profile"
                open={profileOpen}
                onCancel={hideProfile}
                footer={null}
              >
                <Profile open={profileOpen} onCancel={hideProfile} />
              </Modal>
            </div>
          </div>
        </Header>
      </Layout>
    </Layout>
  );
};

export default AppHeader;
