import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import Axios from '../../components/Axios'
import TagSelector from '../../components/search/TagSelector';
import './SearchPage.css';
import { SearchOutlined } from '@ant-design/icons';


/**
 * 搜尋頁面，條件式搜尋
 * @returns 
 */
function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleTagChange = (tag, checked) => {
    const nextSelectedTags = checked ?
      [...selectedTags, tag] :
      selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  const handleSearch = () => {
    // 到時候用Axios
    const searchData = {
      tags: selectedTags,
      userInput: inputValue
    };
    console.log(searchData);
  };

  const timeTags = ['15分鐘或更少', '30分鐘或更少', '60分鐘或更少', '60分鐘以上'];
  const cuisineTags = ['日式', '中式', '韓式', '西班牙', '義式', '德式', '墨西哥'];
  const healthTags = ['不含酒精', '低卡路里', '低蛋白', '高蛋白', '無麩質', '低鈉', '低膽固醇'];

  return (
    <div className="search-container">
      <div className="search-content">
        <div className="search-bar">
        <Input 
            placeholder="輸入你想吃的類型或是食物名稱" 
            size='large' 
            prefix={<SearchOutlined />} 
            onChange={handleInputChange}
            value={inputValue}
          />
        </div>
        <div className="slogan">
          <p>選擇您想要的種類，讓我們幫你挑選您可能喜愛的料理~</p>
        </div>
        <div className="conditions">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <p>製作時間</p>
              <TagSelector tags={timeTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
            <Col span={8}>
              <p>各國料理</p>
              <TagSelector tags={cuisineTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
            <Col span={8}>
              <p>健康選擇</p>
              <TagSelector tags={healthTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
          </Row>
        </div>
        <div className="search-button">
          <Button shape='round' size='large' onClick={handleSearch}>搜索</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
