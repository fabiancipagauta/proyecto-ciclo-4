import { sidebarIMG, adminSectionMenu } from '../assets/img/images';

export const sidebarLinkElements = [
  {
    id: 'sidebar-id-01',
    img: sidebarIMG.profile,
    path: 'perfil',
    title: 'Perfil',
  },
  {
    id: 'sidebar-id-02',
    img: sidebarIMG.vacaciones,
    path: 'vacaciones',
    title: 'Vacaciones',
  },
  {
    id: 'sidebar-id-03',
    img: sidebarIMG.pagos,
    path: 'pagos',
    title: 'Pagos',
  },
  {
    id: 'sidebar-id-04',
    img: sidebarIMG.certificados,
    path: 'certificado',
    title: 'Certificado Laboral',
  },
  {
    id: 'sidebar-id-05',
    img: sidebarIMG.permisos,
    path: 'permisos',
    title: 'Permisos',
  },
];

export const adminLinksElements = [
  {
    id: 'admin-link-01',
    img: adminSectionMenu.gestionUsuario,
    path: 'gestion-usuarios',
    title: 'Gestion usuarios',
  },
  {
    id: 'admin-link-02',
    img: adminSectionMenu.gestionPermisos,
    path: 'gestion-permisos',
    title: 'Gestion permisos',
  },
  {
    id: 'admin-link-03',
    img: adminSectionMenu.gestionVacaciones,
    path: 'gestion-vacaciones',
    title: 'Gestion vacaciones',
  },
  {
    id: 'admin-link-04',
    img: adminSectionMenu.reportes,
    path: '/',
    title: 'Reportes',
  },
  {
    id: 'admin-link-05',
    img: adminSectionMenu.reportes,
    path: 'gestion-pagos',
    title: 'Gestion Pagos',
  },
  {
    id: 'admin-link-06',
    img: adminSectionMenu.dashboard,
    path: '/',
    title: 'Dashboard',
  },
];
