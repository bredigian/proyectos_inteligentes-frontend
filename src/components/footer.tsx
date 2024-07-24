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
      <div className='col-span-full place-self-center p-20 xsm:col-span-1'>
        <img
          alt='Logo de Proyectos Inteligentes'
          src={logo}
          className='w-full max-w-60'
        />
      </div>
      <div className='col-span-full flex w-full flex-col items-center gap-4 bg-pi-blue-normal p-8 xsm:col-span-2 xsm:flex-row xsm:justify-center xsm:gap-16 xsm:p-24'>
        <ul className='flex flex-col items-center gap-4 xsm:items-start'>
          {ROUTES.map((route) => {
            const activePath =
              route.name !== 'Servicios'
                ? pathname === route.path
                : pathname.includes('services');
            return (
              <li
                key={`${route.path}_footer_key`}
                className={cn(
                  'text-xl font-bold xsm:text-2xl xsm:hover:text-white/50',
                  !activePath ? 'text-white' : 'text-white/50',
                )}
              >
                <Link to={route.path}>{route.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className='flex h-full flex-col items-center gap-4 xsm:items-start xsm:justify-start'>
          <span className='bg-white px-6 text-lg font-bold text-pi-blue-normal xsm:bg-pi-blue-normal xsm:px-0 xsm:text-white'>
            Contáctanos
          </span>
          <ul className='flex flex-col items-center gap-2 xsm:items-start'>
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
                <a
                  href='https://www.facebook.com/proyectosinteligentesgt?mibextid=LQQJ4d'
                  target='_blank'
                >
                  <FaFacebookSquare className='text-2xl' />
                </a>
                <a
                  href='https://www.instagram.com/proyectosinteligentesgt'
                  target='_blank'
                >
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
