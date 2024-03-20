import React, { useState } from 'react';
import { Input, Button, Row, Col, Divider } from 'antd';
import Axios from '../../components/Axios';
import TagSelector from '../../components/search/TagSelector';
import SearchResult from '../../components/search/SearchResult'; // 引入搜尋結果組件
import { SearchOutlined } from '@ant-design/icons';
import './SearchPage.css';
import './SearchResultPage.css';

function SearchPage() {
  const [inputValue, setInputValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false); // 新增狀態來控制是否顯示搜尋結果

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
    setShowSearchResult(true); // 當搜尋鍵被點擊時設置狀態為true，顯示搜尋結果

    //下面是假設點擊後的結果：
    const results = [
      { title: '青草三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
      { title: '砸草三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
      { title: '肌肉三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
    ];
    setSearchResults(results);

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
              <p className='tagName'>製作時間</p>
              <TagSelector tags={timeTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
            <Col span={8}>
              <p className='tagName'>各國料理</p>
              <TagSelector tags={cuisineTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
            <Col span={8}>
              <p className='tagName'>健康選擇</p>
              <TagSelector tags={healthTags} selectedTags={selectedTags} handleTagChange={handleTagChange} />
            </Col>
          </Row>
        </div>
        <div className="search-button">
          <Button shape='round' size='large' onClick={handleSearch}>搜索</Button>
        </div>
        
        {/* 顯示搜尋結果 */}
        {showSearchResult && <SearchResult searchResults={searchResults}/>}
      </div>
    </div>
  );
}

export default SearchPage;
