import { homeRoutes } from './homeRoutes';
import { authRoutes } from './authRoutes';

export const mainRoutes = [...authRoutes, ...homeRoutes];
