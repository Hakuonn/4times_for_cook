import React from 'react';
import { Menu, Row, Col, Image } from 'antd';
import { HomeOutlined, ReadOutlined, ExperimentOutlined, HeartOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../images/logo1000x400.png'


/**
 * 嗚嗚嗚沒辦法跳轉
 * @returns 
 */
const Navbar = () => {
  return (
    <Row justify="space-between">
      <Col>
        <div style={{ color: 'white', fontSize: '24px' }}>
          <Image width={200} preview={false} src={logo} />
        </div>
      </Col>
      <Col>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            首頁
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />}>
            知識專區
          </Menu.Item>
          <Menu.Item key="3" icon={<ExperimentOutlined />}>
            前測
          </Menu.Item>
          <Menu.Item key="4" icon={<ExperimentOutlined />}>
            後測
          </Menu.Item>
          <Menu.Item key="5" icon={<HeartOutlined />}>
            健康管理
          </Menu.Item>
          <Menu.Item key="6" icon={<LoginOutlined />}>
            登入/登出
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;
