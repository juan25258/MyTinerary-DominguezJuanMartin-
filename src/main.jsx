import React from "react";
import { createRoot } from "react-dom/client"; // Importar createRoot desde aquí
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.js";

// Usar createRoot en lugar de ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



//con la nomenclatura de arriba tambien funciona.

/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Store/store';

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root')
); */
