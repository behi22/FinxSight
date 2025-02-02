import React from 'react';
import { Modal, Menu, Avatar, Divider } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  open: boolean;
  onCancel: () => void;
}

const Profile: React.FC<ProfileProps> = ({ open, onCancel }) => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    if (key === 'profile') {
      navigate('/user');
    } else if (key === 'settings') {
      navigate('/settings');
    } else if (key === 'logout') {
      console.log('Logged out!'); // Placeholder for logout functionality
      // Add real logout functionality here when needed
    }
  };

  return (
    <Modal open={open} onCancel={onCancel} footer={null} title="Profile">
      <div>
        <h3>Profile</h3>
        <Divider />
      </div>

      <Menu>
        <Menu.Item key="profile" onClick={() => handleMenuClick('profile')}>
          <Avatar icon={<UserOutlined />} style={{ marginRight: 10 }} />
          Your Profile
        </Menu.Item>
        <Menu.Item key="settings" onClick={() => handleMenuClick('settings')}>
          <SettingOutlined style={{ marginRight: 10 }} />
          Settings
        </Menu.Item>
        <Menu.Item key="logout" onClick={() => handleMenuClick('logout')}>
          <LogoutOutlined style={{ marginRight: 10 }} />
          Log Out
        </Menu.Item>
      </Menu>
    </Modal>
  );
};

export default Profile;
