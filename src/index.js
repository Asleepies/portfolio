import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import Splash from './routes/Splash';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<About />}/>

        <Route path="about" element={<About />}/>

        <Route path="projects" element={<Projects />}/>

        <Route path="contact" element={<Contact />}/>
      </Route>

      <Route path="*" element={<h1>Oops, nothing here</h1>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
