import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

