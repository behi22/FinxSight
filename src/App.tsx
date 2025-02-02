import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import Home from './pages/Home';
import Settings from './pages/Settings';
import User from './pages/User';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';

// remove me later
import { HomeOutlined } from '@ant-design/icons';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AppHeader
          pageTitle="Dashboard"
          pageIcon={<HomeOutlined />} // Default icon, adjust based on page
        />
        <Layout>
          <Content
            style={{
              padding: '24px',
              minHeight: 'calc(100vh - 64px)',
            }}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/sales" element={<Sales />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
