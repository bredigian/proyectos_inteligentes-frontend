import { Link, useLocation } from 'react-router-dom';

import { ROUTES } from '../const/routes';
import { cn } from '../lib/utils';
import logo from '../assets/logos/header-logo.png';
import menuIcon from '../assets/utils/menu-icon.png';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <header className='sticky top-0 z-50'>
      <div className='relative z-40 flex w-full items-center justify-between bg-white px-6 py-5'>
        <img alt='Logo de Proyectos Inteligentes' src={logo} className='w-32' />
        <button type='button' onClick={handleMenu}>
          <img alt='Icono de Menú' src={menuIcon} className='w-10' />
        </button>
      </div>
      <nav
        className={cn(
          'absolute z-30 h-svh w-3/4 bg-white px-6 py-4 shadow-xl duration-200 ease-in-out',
          !showMenu ? '-translate-x-full' : 'translate-x-0',
        )}
      >
        <ul className='flex w-full flex-col gap-4'>
          {ROUTES.map((route) => (
            <li
              key={`${route.path}_route`}
              className={cn(
                'font-semibold',
                pathname !== route.path
                  ? 'text-pi-gray-normal'
                  : 'text-pi-blue-normal',
              )}
            >
              <Link to={route.path} onClick={handleMenu}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
