import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown, Image } from 'antd';
import { HomeOutlined, ReadOutlined, ExperimentOutlined, HeartOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import Axios from './components/Axios';
import IndexPage from './pages/index/IndexPage';
import RecipePage from './pages/recipe/RecipePage';
import SearchPage from './pages/search/SearchPage';
import './App.css';
import logo from './images/logo1000x400.png';

const { Header, Content } = Layout;


/**
 * 停用，因為我怕其他人不是用這種方法來寫，而且這個也沒辦法跳轉嗚嗚嗚
 * @returns 
 */
function HomePage() {
  const [recipeData, setRecipeData] = useState(null);
  const [selectedNav, setSelectedNav] = useState('1');
  console.log(selectedNav)

  const getRecipeData = () => {
    const action = '/Recipe/example_output/';
    Axios().get(action)
      .then((res) => {
        setRecipeData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  // 假設使用者登入狀態的狀態是儲存在 localStorage 中的 'isLoggedIn' 鍵值
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // 測驗的下拉式選單
  const menu = (
    <Menu>
      <Menu.Item key="pretest">前測</Menu.Item>
      <Menu.Item key="posttest">後測</Menu.Item>
    </Menu>
  );

  return (
        <Layout>
          <Header 
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
            <div className="demo-logo">
              <Image width={200} preview={false} src={logo} />
            </div>
            <div style={{ flex: 1 }} />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[selectedNav]} onSelect={(item) => setSelectedNav(item.key)}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">首頁</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ReadOutlined />}>
                <Link to="">知識專區</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Dropdown overlay={menu}>
                  <Button>
                    <ExperimentOutlined /> 測驗
                  </Button>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="4" icon={<HeartOutlined />}>
                <Link to="">健康管理</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={isLoggedIn ? <LogoutOutlined /> : <LoginOutlined />}>
                {isLoggedIn ? '登出' : '登入'}
              </Menu.Item>
              <Menu.Item key="6" icon={<HeartOutlined />}>
                <Link to="">食譜頁面</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<HeartOutlined />}>
                <Link to="">搜尋頁面</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            {selectedNav === '1' && <IndexPage/> }
            {selectedNav === '2' && 'hahaha' }
            {selectedNav === '3' && 'hahaha' }
            {selectedNav === '4' && 'hahaha' }
            {selectedNav === '5' && 'hahaha' }
            {selectedNav === '6' && <RecipePage/> }
            {selectedNav === '7' && <SearchPage/> }
          </Content>
        </Layout>
  );
}

export default HomePage;
