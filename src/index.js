import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { LikesContextProvider } from './store/likes-conext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LikesContextProvider>
        <App />
    </LikesContextProvider>
);

