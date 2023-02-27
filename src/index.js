import React from 'react';
import { createRoot } from 'react-dom/client';
import BlogPage from './component/blog';
import Content from './component/content'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './component/pg';
import AdminPage from './component/adminpanel';
import Adminfunction from './component/adminfun';
import Deleteblogs from './component/deleteblog'
function Main()
{
  return (
    <section>
    <Router>
        <Routes>
           <Route path='/' element={<BlogPage />} />
           <Route path='/page/:tag' element={<Page />} />
           <Route path='/login' element={<AdminPage/>} />
           <Route path="/next/:id" element={<Content/>}/>
           <Route path="/admin" element={<AdminPage/>}/>
           <Route path="/add/data" element={<Adminfunction/>}/>
           <Route path="/delete" element={<Deleteblogs/>}/>
        </Routes>
    </Router>
    </section>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />)




