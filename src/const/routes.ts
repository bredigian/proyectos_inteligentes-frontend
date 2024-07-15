type TRoute = {
  path: string;
  name: string;
};

export const ROUTES: TRoute[] = [
  {
    path: '/',
    name: 'Inicio',
  },
  {
    path: '/services',
    name: 'Servicios',
  },
  {
    path: '/catalogue',
    name: 'Catálogo de Renta',
  },
  {
    path: '/contact',
    name: 'Contacto',
  },
];
