import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'

// Renderizado de la aplicación en el contenedor con id 'root'

ReactDOM.createRoot(document.getElementById('root')).render(
    // Modo estricto habilitado solo en desarrollo para detectar posibles problemas

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
