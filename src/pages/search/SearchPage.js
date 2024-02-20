import React, { useState } from 'react';
import { Tag, Input, Button, Row, Col } from 'antd';
import './SearchPage.css';
import { SearchOutlined } from '@ant-design/icons';
const { CheckableTag } = Tag;

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

  return (
    <div className="search-container">
      <div className="search-content">
        <div className="search-bar">
        <Input 
            placeholder="輸入你想吃的類型或是食物名稱" 
            size='large' 
            prefix={<SearchOutlined />} 
            onChange={handleInputChange} // 监听用户输入变化
            value={inputValue} // 将输入的值绑定到输入框
          />
        </div>
        <div className="slogan">
          <p>選擇您想要的種類，讓我們幫你挑選您可能喜愛的料理~</p>
        </div>
        <div className="conditions">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <p>製作時間</p>
              <CheckableTag
                checked={selectedTags.includes('15分鐘或更少')}
                onChange={checked => handleTagChange('15分鐘或更少', checked)}
              >
                15分鐘或更少
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('30分鐘或更少')}
                onChange={checked => handleTagChange('30分鐘或更少', checked)}
              >
                30分鐘或更少
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('60分鐘或更少')}
                onChange={checked => handleTagChange('60分鐘或更少', checked)}
              >
                60分鐘或更少
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('60分鐘以上')}
                onChange={checked => handleTagChange('60分鐘以上', checked)}
              >
                60分鐘以上
              </CheckableTag>
            </Col>
            <Col span={8}>
              <p>各國料理</p>
              <CheckableTag
                checked={selectedTags.includes('日式')}
                onChange={checked => handleTagChange('日式', checked)}
              >
                日式
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('中式')}
                onChange={checked => handleTagChange('中式', checked)}
              >
                中式
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('韓式')}
                onChange={checked => handleTagChange('韓式', checked)}
              >
                韓式
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('西班牙')}
                onChange={checked => handleTagChange('西班牙', checked)}
              >
                西班牙
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('義式')}
                onChange={checked => handleTagChange('義式', checked)}
              >
                義式
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('德式')}
                onChange={checked => handleTagChange('德式', checked)}
              >
                德式
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('墨西哥')}
                onChange={checked => handleTagChange('墨西哥', checked)}
              >
                墨西哥
              </CheckableTag>
            </Col>
            <Col span={8}>
              <p>健康選擇</p>
              <CheckableTag
                checked={selectedTags.includes('不含酒精')}
                onChange={checked => handleTagChange('不含酒精', checked)}
              >
                不含酒精
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('低卡路里')}
                onChange={checked => handleTagChange('低卡路里', checked)}
              >
                低卡路里
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('低蛋白')}
                onChange={checked => handleTagChange('低蛋白', checked)}
              >
                低蛋白
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('高蛋白')}
                onChange={checked => handleTagChange('高蛋白', checked)}
              >
                高蛋白
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('無麩質')}
                onChange={checked => handleTagChange('無麩質', checked)}
              >
                無麩質
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('低鈉')}
                onChange={checked => handleTagChange('低鈉', checked)}
              >
                低鈉
              </CheckableTag>
              <CheckableTag
                checked={selectedTags.includes('低膽固醇')}
                onChange={checked => handleTagChange('低膽固醇', checked)}
              >
                低膽固醇
              </CheckableTag>
            </Col>
          </Row>
        </div>
        <div className="search-button">
          <Button type="primary" onClick={handleSearch}>搜索</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
