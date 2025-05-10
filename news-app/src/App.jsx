import React from 'react';
import { Routes, Route } from 'react-router-dom';
import News from './components/News';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <div className='container'>
      <div className='news-app'>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
