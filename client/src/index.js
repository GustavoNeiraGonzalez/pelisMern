import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { InicioSesion } from './pages/InicioSesion';
import { Landing } from './pages/Principal';
import bootstrap from 'bootstrap'
import { TopHeader } from './pages/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <TopHeader/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/InicioSesion" element={<InicioSesion/>}/>
        <Route  path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </main>
  </BrowserRouter>
);

