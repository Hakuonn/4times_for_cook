import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import logo_540 from '../../images/logo_540.png';
import './RecipePage.css'

const { Title, Paragraph } = Typography;

const RecipePage = ({ recipe }) => {
  const [data, setData] = useState(null);
  console.log(data)

  useEffect(() => {
    if (recipe) {
      const modifiedRecipe = { 
        ...recipe, 
        nutrition: JSON.parse(recipe.attributes.nutrition.replace(/'/g, '"')), 
        ingredients: JSON.parse(recipe.ingredients.replace(/'/g, '"')), 
        steps: JSON.parse(recipe.steps.replace(/'/g, '"')), 
      };
      setData(modifiedRecipe);
    }
  }, [recipe]);

  return (
    <div style={{  background: '#f2f2f2', minHeight: '100vh', padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    {data && (
      <Row gutter={16}>
        <Card style={{ borderRadius: '10px', textAlign: 'left', padding: '20px', marginRight: 60, fontSize: '20px' }}>
          <Title>{data.name}</Title>
          <Paragraph>{data.description}</Paragraph>
          <Divider />
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <div>
                <Title level={3}>準備材料</Title>
                <ul>
                  {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>                
            </Col>
            <Col xs={24} md={12}>
              <div>
                <Title level={3}>營養資訊</Title>
                <ul>
                  {data.nutrition.map((value, index) => {
                    let label;
                    switch (index) {
                      case 0:
                        label = "卡路里（#）";
                        break;
                      case 1:
                        label = "總脂肪（PDV）";
                        break;
                      case 2:
                        label = "糖（PDV）";
                        break;
                      case 3:
                        label = "鈉（PDV）";
                        break;
                      case 4:
                        label = "蛋白質（PDV）";
                        break;
                      case 5:
                        label = "飽和脂肪";
                        break;
                      default:
                        label = "碳水化合物";
                    }
                    return <li key={index}>{label}: {value}</li>;
                  })}
                </ul>
              </div>                
            </Col>
          </Row>

          <div>
            <Title level={3}>步驟</Title>
            <ol>
              {data.steps.map((step, index) => (
                <div key={index}>
                  <li>{step.trim()}</li>
                  {index !== data.steps.length - 1 && <Divider />}
                </div>
              ))}
            </ol>
          </div>
        </Card>
      </Row>
    )}
    </div>
  );
};

export default RecipePage;
