import { RouteConfig } from 'react-router-config';
import { Home } from '../containers/Home';
import { Browse } from '../containers/Browse';
import { ProductPage } from '../containers/ProductPage';

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/Browse',
    component: Browse,
  },
  {
    path: '/ProductPage',
    component: ProductPage,
  },
];
