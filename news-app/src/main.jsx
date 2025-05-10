// ✅ React core and routing imports
import React from 'react';
import { StrictMode } from 'react'; // Optional, already included in React
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ✅ App and styles
import App from './App';
import './index.css';

// ✅ Render the app into the root div with BrowserRouter for routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
