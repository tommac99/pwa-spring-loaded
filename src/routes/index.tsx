import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';
import { Browse } from '../containers/Browse';
import { ProductPage } from '../containers/ProductPage';

export const routes: RouteConfig[] = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'Browse',
    path: '/Browse',
    component: Browse,
  },
  {
    Browse: 'Product',
    path: '/ProductPage',
    component: ProductPage,
  },
];
