import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Axios from './components/Axios';
import HomePage from './HomePage';
import IndexPage from './pages/index/IndexPage';
import RecipePage from './pages/recipe/RecipePage';
import SearchPage from './pages/search/SearchPage';
import './App.css';
import Navbar from './components/NavBar';

function App() {
  const [recipeData, setRecipeData] = useState(null);

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
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<IndexPage />} exact />
        <Route path="/Recipe" element={<RecipePage recipe={recipeData} />} exact />
        <Route path="/Search" element={<SearchPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
