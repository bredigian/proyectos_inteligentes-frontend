import { Analytics } from '@vercel/analytics/react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <>
      <Analytics />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
