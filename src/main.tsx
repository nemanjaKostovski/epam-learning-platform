import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Blog from './components/Blog/Blog.tsx';
import AboutUs from './components/About_us/AboutUs.tsx';
import Pricing from './components/Pricing/Pricing.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
