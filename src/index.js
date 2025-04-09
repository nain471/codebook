import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components';
import { FilterProvider } from './contexts/FilterContext';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './contexts/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ToastContainer/>
          <ScrollToTop/>
          <App />
        </FilterProvider>

      </CartProvider>
    </Router>
  </React.StrictMode>
);


