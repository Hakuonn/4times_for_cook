import React from 'react';
import { Button, Col, Image, Row } from 'antd';
import { UserOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import './IndexPage.css';
import logo_and_solgan_540 from '../../images/logo_and_slogan_540_white.png';



/**
 * 首頁-進入網站的最一開始
 * 包含：登入、註冊與訪客登入
 * @returns 
 */
const IndexPage = () => {
  return (
    <Row className="index-page-container" justify="center" align="middle">

      <Row>
        <Col xs={24} md={24}>
          <Image src={logo_and_solgan_540} preview={false} />
        </Col>        
      </Row>

      <Row gutter={[16, 40]} justify="center">
        <Col xs={24} md={12}>
          <Button type="primary" size='large' shape='round' icon={<LoginOutlined />} block>
            登入
          </Button>
        </Col>
        <Col xs={24} md={12}>
          <Button type="default" size='large' shape='round' icon={<UserAddOutlined />} block>
            註冊
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 40]}>
        <Col xs={24} md={24} style={{ marginTop: '24px' }}>
          <Button size='large' shape='round' icon={<UserOutlined />} block>
            訪客登入
          </Button>
        </Col>
      </Row>      
        
    </Row>
  );
};

export default IndexPage;
