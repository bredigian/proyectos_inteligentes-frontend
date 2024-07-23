import { TService } from '../types/services.types';
import construccionDesktop from '../assets/images/services/desktop/SERV_Construcción.jpg';
import construccionMobile from '../assets/images/services/mobile/SERV_Construcción.jpg';
import constructionManagmentDesktop from '../assets/images/services/desktop/SERV_ConstructionManagment.jpg';
import constructionManagmentMobile from '../assets/images/services/mobile/SERV_ConstructionManagment.jpg';
import demolicionesDesktop from '../assets/images/services/desktop/SERV_Demoliciones.jpg';
import demolicionesMobile from '../assets/images/services/mobile/SERV_Demoliciones.jpg';
import perforacionesEnConcretoDesktop from '../assets/images/services/desktop/SERV_Perforaciones.jpg';
import perforacionesEnConcretoMobile from '../assets/images/services/mobile/SERV_Perforaciones.jpg';
import planificacionDeConstruccionDesktop from '../assets/images/services/desktop/SERV_Planificación.jpg';
import planificacionDeConstruccionMobile from '../assets/images/services/mobile/SERV_Planificación.jpg';
import remodelacionesDesktop from '../assets/images/services/desktop/SERV_Remodelaciones.jpg';
import remodelacionesMobile from '../assets/images/services/mobile/SERV_Remodelaciones.jpg';
import supervisionTecnicaDesktop from '../assets/images/services/desktop/SERV_Supervision.jpg';
import supervisionTecnicaMobile from '../assets/images/services/mobile/SERV_Supervision.jpg';

export const SERVICES: TService[] = [
  {
    title: 'Perforaciones en Concreto',
    description:
      'Realizamos perforaciones circulares para paso de instalaciones en muros y losas de concreto de hasta 1.2 metros de profundidad. Nuestros procedimientos son limpios y seguros, garantizando un excelente trabajo.',
    imgMobile: perforacionesEnConcretoMobile,
    imgDesktop: perforacionesEnConcretoDesktop,
  },
  {
    title: 'Demoliciones',
    description:
      'Demoliciones profesionales de todo tipo de estructuras incluyendo concreto y acero estructural. Nos enfocamos en la seguridad del personal y las zonas aledañas, desmontamos aquellos materiales que son reutilizables, extraemos el material generado y limpiamos el área.',
    imgMobile: demolicionesMobile,
    imgDesktop: demolicionesDesktop,
  },
  {
    title: 'Construcción',
    description:
      'Somos contratistas de obra civil y acabados. Nos encargamos de ejecutar los planos y especificaciones de su diseñador ajustándonos al requerimiento del cliente y a las condiciones específicas de cada obra, garantizando así un proyecto bien ejecutado.',
    imgMobile: construccionMobile,
    imgDesktop: construccionDesktop,
  },
  {
    title: 'Planificación de Construcción',
    description:
      'Reunir toda la información requerida por parte de los diseñadores para ser revisada previo al inicio de la construcción y planificar todas las actividades a desarrollar es indispensable para lograr eficiencias y reducir los imprevistos.',
    imgMobile: planificacionDeConstruccionMobile,
    imgDesktop: planificacionDeConstruccionDesktop,
  },
  {
    title: 'Supervisión Técnica',
    description:
      'Una constante revisión de los trabajos realizados por un contratista con el objetivo de garantizar el cumplimiento del contrato desde un punto de vista técnico, económico y de tiempo. Verificamos los procedimientos de construcción y las buenas prácticas.',
    imgMobile: supervisionTecnicaMobile,
    imgDesktop: supervisionTecnicaDesktop,
  },
  {
    title: 'Construction Management',
    description:
      'Administrar una obra de construcción supervisando y coordinando a los diferentes contratistas involucrados. Nos encargamos de asesorar y contratar al grupo de profesionales que harán de su proyecto un éxito.',
    imgMobile: constructionManagmentMobile,
    imgDesktop: constructionManagmentDesktop,
  },
  {
    title: 'Remodelaciones',
    description:
      'Realizamos remodelaciones personalizadas integrales o individuales de todo tipo. Nuestro equipo de remodelaciones se encarga de la ejecución y planificación del proyecto como también la compra de materiales y acabados para asegurarnos el éxito del mismo.',
    imgMobile: remodelacionesMobile,
    imgDesktop: remodelacionesDesktop,
  },
];
