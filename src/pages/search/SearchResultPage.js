import React, { useState } from 'react';
import { Input, Divider } from 'antd';
import './SearchResultPage.css';

const { Search } = Input;

// 這個頁面別理，我用來設計的而已
function SearchResultPage() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (value) => {
        // 在這裡執行搜尋功能，並將結果設置到searchResults狀態中
        // 這裡只是一個示例，你需要根據你的應用程序自訂搜尋邏輯
        setSearchText(value);
        const results = [
          { title: '青草三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
          { title: '砸草三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
          { title: '肌肉三色豆', description: '好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。好吃ㄉ三色豆，小朋友都很愛。' },
        ];
        setSearchResults(results);
      };
  return (
    <div style={{ padding: '20px' }}>
      <Search
        placeholder="請輸入搜尋內容"
        enterButton="搜尋"
        size="large"
        onSearch={handleSearch}
      />
      <div className="search-results-container">
        {searchResults.map((item, index) => (
          <div key={index} className="search-result-item">
            <div className="search-result-content">
              <a href="#">{item.title}</a>
              <Divider/>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResultPage;
