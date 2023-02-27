import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import BlogPage from './component/blog';
import Tags from './component/tags';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './component/pg';
import AdminPage from './component/admin';

function Main()
{
  return (
    <section>
    <Router>
        <Routes>
           <Route path='/' element={<BlogPage />} />
           <Route path='/page/:tag' element={<Page />} />
           <Route path='/login' element={<AdminPage/>} />
        </Routes>
    </Router>
    </section>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />)




