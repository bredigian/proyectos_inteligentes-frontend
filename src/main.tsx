import '@fontsource/dm-sans';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/800.css';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Catalogue from './pages/catalogue-page.tsx';
import Contact from './pages/contact-page.tsx';
import Home from './pages/home-page.tsx';
import PageNotFound from './pages/not-found-page.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootLayout } from './layouts/root.tsx';
import Services from './pages/services-page.tsx';
import ServicesQuotes from './pages/services-quote-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/services/quotes',
        element: <ServicesQuotes />,
      },
      {
        path: '/catalogue',
        element: <Catalogue />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
