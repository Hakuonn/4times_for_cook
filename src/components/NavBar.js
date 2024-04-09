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
  const navigate = useNavigate()
  const jwtToken = window.localStorage.getItem('jwt');

  const LogIn = () => {
    const w = window.open("/LoginPage", '_self');
  }

  const LogOut = () => {
    window.localStorage.removeItem('jwt');
    alert('您已登出');
    navigate('/');
    window.location.reload();
  }

  return (
    <Row justify="space-between">
      <Col>
        <div style={{ color: 'white', fontSize: '20px' }}>
          <Image width={150} preview={false} src={logo} />
        </div>
      </Col>
      <Col>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />} onClick={()=>{navigate("/")}}>
            首頁
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />} onClick={()=>{navigate("/knowledge")}}>
            知識專區
          </Menu.Item>
          <Menu.Item key="3" icon={<ExperimentOutlined />} onClick={()=>{navigate("/")}}>
            前測
          </Menu.Item>
          <Menu.Item key="4" icon={<ExperimentOutlined />} onClick={()=>{navigate("/")}}>
            後測
          </Menu.Item>
          <Menu.Item key="5" icon={<HeartOutlined />} onClick={()=>{navigate("/health")}}>
            健康管理
          </Menu.Item>
          {jwtToken === 'None' || jwtToken === null?
                      <Link className='nav-to-profile' onClick={() => LogIn()}>
                        <Menu.Item key="6" icon={<LoginOutlined />} onClick={()=>{navigate("/")}}>
                          登入
                        </Menu.Item>
                      </Link>
                      :
                      <Link className='nav-to-profile' onClick={() => LogOut()}>
                        <Menu.Item key="6" icon={<LoginOutlined />} onClick={()=>{navigate("/")}}>
                          登出
                        </Menu.Item>
                      </Link>
                    }
          {/* <Menu.Item key="6" icon={<LoginOutlined />} onClick={()=>{navgate("/")}}>
            登入/登出
          </Menu.Item> */}
          {/* 以下之後要刪掉 */}
          <Menu.Item key="7" icon={<LoginOutlined />} onClick={()=>{navigate("/Recipe")}}>
            食譜
          </Menu.Item>
          <Menu.Item key="8" icon={<LoginOutlined />} onClick={()=>{navigate("/Search")}}>
            搜尋
          </Menu.Item>
          <Menu.Item key="9" icon={<LoginOutlined />} onClick={()=>{navigate("/SearchResult")}}>
            搜尋結果
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Navbar;