import React from 'react';
import { NotFound } from '@/pages/NotFound';
import Home from '@/pages/home';
import { Movie } from '@/pages/movie';
/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movie',
    element: <Movie />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
