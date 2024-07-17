import { Link, useLocation } from 'react-router-dom';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { ROUTES } from '../const/routes';
import { cn } from '../lib/utils';
import logo from '../assets/logos/footer-logo.png';

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className='grid grid-cols-3'>
      <div className='xsm:col-span-1 col-span-full place-self-center p-20'>
        <img
          alt='Logo de Proyectos Inteligentes'
          src={logo}
          className='w-full max-w-60'
        />
      </div>
      <div className='xsm:col-span-2 xsm:flex-row xsm:p-24 xsm:gap-16 xsm:justify-center col-span-full flex w-full flex-col items-center gap-4 bg-pi-blue-normal p-8'>
        <ul className='xsm:items-start flex flex-col items-center gap-4'>
          {ROUTES.map((route) => (
            <li
              key={`${route.path}_footer_key`}
              className={cn(
                'xsm:text-2xl xsm:hover:text-white/50 text-xl font-bold',
                route.path !== pathname ? 'text-white' : 'text-white/50',
              )}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <div className='xsm:items-start xsm:justify-start flex h-full flex-col items-center gap-4'>
          <span className='xsm:bg-pi-blue-normal xsm:text-white xsm:px-0 bg-white px-6 text-lg font-bold text-pi-blue-normal'>
            Contáctanos
          </span>
          <ul className='xsm:items-start flex flex-col items-center gap-2'>
            <li className='text-lg font-bold text-white'>
              <a href='tel:+50223656492' target='_blank'>
                +502 2365-6492
              </a>
            </li>
            <li className='text-lg font-bold text-white'>
              <a href='mailto:info@pi.com.gt' target='_blank'>
                INFO@PI.COM.GT
              </a>
            </li>
            <li className='flex items-center justify-center gap-4 font-bold text-white'>
              <span className='text-lg'>Redes</span>
              <div className='flex items-center gap-4'>
                <a href='#' target='_blank'>
                  <FaFacebookSquare className='text-2xl' />
                </a>
                <a href='#' target='_blank'>
                  <FaInstagram className='text-2xl' />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
