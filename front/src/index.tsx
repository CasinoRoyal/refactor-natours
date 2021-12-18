import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './ui/store/store';
import { AuthProvider } from './ui/context/auth';
import { App } from './app';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
