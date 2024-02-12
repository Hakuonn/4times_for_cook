import './App.css';

import IndexPage from './pages/index/IndexPage';
import RecipePage from './pages/recipe/RecipePage';

const sampleRecipe = {
  name: '美味三色豆',
  image: 'https://fuckyou.com/fuckimage',
  tags: ['簡單', '健康', '快速'],
  introduction: '這是一個美味食譜的介紹。',
  ingredients: ['青豆', '玉米', '紅蘿蔔'],
  nutrition: {
    熱量: '200kcal',
    脂肪: '10g',
    蛋白質: '20g',
    納: '50mg',
  },
  steps: ['準備食材', '放入油，待油燒熱','放入三色豆翻炒','調味後，完成！'],
};

function App() {
  return (
    <div className="App">
      <IndexPage/>
      {/* <RecipePage recipe={sampleRecipe} /> */}
    </div>
  );
}

export default App;
