import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </HashRouter>
  </React.StrictMode>
);
