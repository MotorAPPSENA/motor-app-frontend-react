import React from 'react';
import { createRoot } from 'react-dom/client'; // se importa createRoot desde 'react-dom/client'
import App from './App'; 
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); // createRoot directamente