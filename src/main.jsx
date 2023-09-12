import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client"; // Importar createRoot desde aquí
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";


// Usar createRoot en lugar de ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>

);
