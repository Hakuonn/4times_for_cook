import React, { useState } from 'react';
import { Button, Col, Image, Row, Modal } from 'antd';
import { UserOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import './IndexPage.css';
import logo_and_solgan_540 from '../../images/logo_and_slogan_540_white.png';

const IndexPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // example
  const accounts = [
    { id: 1, name: '帳號Ａ' },
    { id: 2, name: '帳號Ｂ' }
  ];

  const handleGuestLogin = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="index-page-container" justify="center" align="middle">

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
          <Button size='large' shape='round' icon={<UserOutlined />} block onClick={handleGuestLogin}>
            訪客登入
          </Button>
        </Col>
      </Row>      

      {/* Modal 组件 */}
      <Modal
        title="選擇訪客帳號"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', height: '300px', overflowY: 'auto' }}>
          {/* example */}
          {accounts.map(account => (
            <Button key={account.id} type="default" size="large" block style={{ marginBottom: '12px' }}>
              {account.name}
            </Button>
          ))}
        </div>
      </Modal>
        
    </div>
  );
};

export default IndexPage;
