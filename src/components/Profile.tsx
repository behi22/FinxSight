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
  onCloseSidebar: () => void;
}

const Profile: React.FC<ProfileProps> = ({
  open,
  onCancel,
  onCloseSidebar,
}) => {
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
    // Close modal and sidebar after menu item click
    onCancel();
    onCloseSidebar();
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      title="Profile"
      className="profile-modal"
    >
      <div>
        <Divider />
      </div>

      <Menu>
        <Menu.Item
          key="profile"
          style={{ background: 'transparent', padding: 0, color: 'black' }}
          onClick={() => handleMenuClick('profile')}
        >
          <Avatar icon={<UserOutlined />} style={{ marginRight: 10 }} />
          Your Profile
        </Menu.Item>
        <Menu.Item
          key="settings"
          style={{ background: 'transparent', padding: 0, color: 'black' }}
          onClick={() => handleMenuClick('settings')}
        >
          <SettingOutlined style={{ marginRight: 10 }} />
          Settings
        </Menu.Item>
        <Menu.Item
          key="logout"
          style={{ background: 'transparent', padding: 0, color: 'black' }}
          onClick={() => handleMenuClick('logout')}
        >
          <LogoutOutlined style={{ marginRight: 10 }} />
          Log Out
        </Menu.Item>
      </Menu>
    </Modal>
  );
};

export default Profile;
