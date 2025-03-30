import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/header.css';
import './styles/footer.css';
import './styles/authModal.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. Переконайтеся, що елемент з id="root" існує у вашому public/index.html
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();