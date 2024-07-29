import { TService } from '../types/services.types';
import construccionDesktop from '../assets/images/services/desktop/SERV_Construcción.jpg';
import construccionMobile from '../assets/images/services/mobile/SERV_Construcción.jpg';
import demolicionesDesktop from '../assets/images/services/desktop/SERV_Demoliciones.jpg';
import demolicionesMobile from '../assets/images/services/mobile/SERV_Demoliciones.jpg';
import perforacionesEnConcretoDesktop from '../assets/images/services/desktop/SERV_Perforaciones.jpg';
import perforacionesEnConcretoMobile from '../assets/images/services/mobile/SERV_Perforaciones.jpg';

export const SERVICES: TService[] = [
  {
    title: 'Perforaciones en concreto',
    description:
      'Realizamos perforaciones circulares para paso de instalaciones en muros y losas de concreto de hasta 1.2 metros de profundidad. Nuestros procedimientos son limpios y seguros, garantizando un excelente trabajo.',
    imgMobile: perforacionesEnConcretoMobile,
    imgDesktop: perforacionesEnConcretoDesktop,
  },
  {
    title: 'Renta de equipo de construcción',
    description:
      'Somos contratistas de obra civil y acabados. Nos encargamos de ejecutar los planos y especificaciones de su diseñador ajustándonos al requerimiento del cliente y a las condiciones específicas de cada obra, garantizando así un proyecto bien ejecutado.',
    imgMobile: construccionMobile,
    imgDesktop: construccionDesktop,
  },
  {
    title: 'Demolición',
    description:
      'Demoliciones profesionales de todo tipo de estructuras incluyendo concreto y acero estructural. Nos enfocamos en la seguridad del personal y las zonas aledañas, desmontamos aquellos materiales que son reutilizables, extraemos el material generado y limpiamos el área.',
    imgMobile: demolicionesMobile,
    imgDesktop: demolicionesDesktop,
  },
];
