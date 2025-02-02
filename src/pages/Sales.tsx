import React, { useState } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';
import AppFooter from '../components/Footer';

// remove me later
import { HomeOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Layout className="app-layout">
      <AppHeader pageTitle="Dashboard Home" pageIcon={<HomeOutlined />} />

      <Layout>
        <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
          {/* Empty body for now */}
        </Content>
      </Layout>

      <AppFooter toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </Layout>
  );
};

export default Home;
