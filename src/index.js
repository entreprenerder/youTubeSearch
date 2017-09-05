// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
      <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);
