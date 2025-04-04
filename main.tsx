import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.tsx';


// Entry point where root component is rendered into the DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);