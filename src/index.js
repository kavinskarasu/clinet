import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import BlogPage from './component/blog';
import Tags from './component/tags';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './component/pg';

function Main()
{
  return (
    <>
    <Tags />
    <Router>
        <Routes>
           <Route path='/' element={<BlogPage />} />
           <Route path='/page' element={<Page />} />
        </Routes>
    </Router>
    <BlogPage />
    </>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />)




