/* import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
  <Provider store={store}>

    <App />
    
  </Provider>

  </React.StrictMode>
); */


//con la nomenclatura de arriba tambien funciona.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
