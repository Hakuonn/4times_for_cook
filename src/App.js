import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Axios from './components/Axios';
import IndexPage from './pages/index/IndexPage';
import RecipePage from './pages/recipe/RecipePage';
import SearchPage from './pages/search/SearchPage';


function App() {
  const [recipeData, setRecipeData] = useState(null);
  // console.log(recipeData)

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
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>} exact/>
        <Route path='/Recipe' element={<RecipePage recipe={recipeData}/>}  exact/>
        <Route path='/Search' element={<SearchPage/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
