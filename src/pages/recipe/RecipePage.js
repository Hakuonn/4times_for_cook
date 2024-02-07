import React from 'react';
import { Row, Col, Card, Typography, Tag, Image, Divider } from 'antd';
import logo_540 from '../../images/logo_540.png';

const { Title, Paragraph, Text } = Typography;

/**
 * 食譜頁面
 * @param {*} param0 
 * @returns 
 */
const RecipePage = ({ recipe }) => {
  const {
    name,
    image,
    tags,
    introduction,
    ingredients,
    nutrition,
    steps,
  } = recipe;

  return (
    <div style={{ background: '#f2f2f2', minHeight: '100vh', padding: 20 }}>
      {/* 這裡等到搜尋製作完畢，即可放上 */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          {/* 食譜主圖像 如果顯示不出來的話，會顯示本平台logo */}
          <Image src={image} preview={false} fallback={logo_540} />
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: '10px', textAlign: 'left', padding: '16px'}}>
            <Title>{name}</Title>
            {tags && (
              <div>
                tags：
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
            <Paragraph>{introduction}</Paragraph>
            <Divider/>

            <Row gutter={[200, 16]}>
              <Col>
                <Title level={3}>所需材料</Title>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Col>
              <Col>
                <Title level={3}>營養成分</Title>
                <ul>
                  {Object.entries(nutrition).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Divider/>

      <div>
        <Title level={1} style={{ textAlign: 'left'}}>步驟</Title>
        <ol style={{ backgroundColor: 'white', borderRadius: 50}}>
          {steps.map((step, index) => (
            <>
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <Text strong style={{ flexBasis: '30%', fontSize: 120 }}>{index + 1}</Text>
                <Text style={{ flexBasis: '70%', fontSize: 30, textAlign:'left' }}>{step}</Text>
              </li>
              {index !== steps.length - 1 && <Divider />}
            </>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;
