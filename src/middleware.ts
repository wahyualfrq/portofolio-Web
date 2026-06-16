import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match root url
    '/',
    // Match locales explicitly
    '/(en|id)/:path*',
    // Avoid running on next static assets, files, images
    '/((?!_next|api|.*\\..*).*)'
  ]
};
