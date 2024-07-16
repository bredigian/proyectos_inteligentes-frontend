import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/800.css';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { Footer } from './components/footer.tsx';
import { Header } from './components/header.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.StrictMode>
        <Header />
        <App />
        <Footer />
      </React.StrictMode>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
