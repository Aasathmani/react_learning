//import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';


const entryPoint =document.getElementById("root");
//ReactDOM.createRoot(entryPoint).render(<App />)
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
