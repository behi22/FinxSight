import { Row, Col, Space, Typography } from 'antd';
import {
  YahooOutlined,
  XOutlined,
  FacebookOutlined,
  InstagramOutlined,
  BulbOutlined,
  BulbFilled,
} from '@ant-design/icons';

const { Text } = Typography;

const AppFooter = ({
  toggleDarkMode,
  darkMode,
}: {
  toggleDarkMode: () => void;
  darkMode: boolean;
}) => {
  return (
    <footer style={{ background: '#f0f0f0', padding: '20px' }}>
      <Row align="middle" justify="space-between">
        <Col>
          <Space>
            <img
              src="/logo.png"
              alt="Company Logo"
              style={{ height: '30px' }}
            />
            <Space>
              <FacebookOutlined />
              <InstagramOutlined />
              <XOutlined />
              <YahooOutlined />
            </Space>
          </Space>
        </Col>

        <Col>
          <Text>
            &copy; {new Date().getFullYear()} Behbod Babai. All rights reserved.
          </Text>
        </Col>

        <Col>
          <Space
            onClick={toggleDarkMode}
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
          >
            {darkMode ? (
              <BulbFilled style={{ color: '#1890ff' }} />
            ) : (
              <BulbOutlined />
            )}
          </Space>
        </Col>
      </Row>
    </footer>
  );
};

export default AppFooter;
