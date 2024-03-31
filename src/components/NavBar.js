import React from 'react';
import { Menu, Row, Col, Image } from 'antd';
import { HomeOutlined, ReadOutlined, ExperimentOutlined, HeartOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../images/logo1000x400.png'
import { Link ,useNavigate} from 'react-router-dom';


/**
 * 嗚嗚嗚沒辦法跳轉
 * @returns
 */
const Navbar = () => {
  const navgate = useNavigate()
  return (
    <Row justify="space-between">
      <Col>
        <div style={{ color: 'white', fontSize: '20px' }}>
          <Image width={150} preview={false} src={logo} />
        </div>
      </Col>
      <Col>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>{navgate("/")}}>
            首頁
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />} onClick={()=>{navgate("/knowledge")}}>
            知識專區
          </Menu.Item>
          <Menu.Item key="3" icon={<ExperimentOutlined />} onClick={()=>{navgate("/")}}>
            前測
          </Menu.Item>
          <Menu.Item key="4" icon={<ExperimentOutlined />} onClick={()=>{navgate("/")}}>
            後測
          </Menu.Item>
          <Menu.Item key="5" icon={<HeartOutlined />} onClick={()=>{navgate("/health")}}>
            健康管理
          </Menu.Item>
          <Menu.Item key="6" icon={<LoginOutlined />} onClick={()=>{navgate("/")}}>
            登入/登出
          </Menu.Item>
          {/* 以下之後要刪掉 */}
          <Menu.Item key="7" icon={<LoginOutlined />} onClick={()=>{navgate("/Recipe")}}>
            食譜
          </Menu.Item>
          <Menu.Item key="8" icon={<LoginOutlined />} onClick={()=>{navgate("/Search")}}>
            搜尋
          </Menu.Item>
          <Menu.Item key="9" icon={<LoginOutlined />} onClick={()=>{navgate("/SearchResult")}}>
            搜尋結果
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;