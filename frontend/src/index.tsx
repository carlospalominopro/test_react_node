import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// LIB'S
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'animate.css/animate.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
