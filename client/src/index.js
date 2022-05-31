import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { InicioSesion } from './pages/InicioSesion';
import { Landing } from './pages/Principal';
import bootstrap from 'bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <Landing/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<div>home</div>}/>
        <Route path="/users" element={<div>users</div>}/>
        <Route  path="*" element={<Navigate replace to="/"/>}/>
      </Routes>
    </main>
  </BrowserRouter>
);

