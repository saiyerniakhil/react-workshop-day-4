import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SampleComponent from './SampleComponent'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SampleComponent ></SampleComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
