import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import Loader from './components/Loader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>
);
