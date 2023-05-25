import React from 'react';
import { NotFound } from '@/pages/NotFound';
import { Home } from '@/pages/home';
import { Movie } from '@/pages/movie';
import { Front } from '@/pages/Front';
import Admin from '@/pages/Admin';
import AdminHome from '@/pages/Admin/Home';
import AdminNotFound from '@/pages/Admin/NotFound/index';
import AdminSystemManage from '@/pages/Admin/SystemManage/index.jsx';
import AdminUserManage from '@/pages/Admin/UserManage/index.jsx';
/**
 * @type {import("react-router-dom").RouteObject[]}
 */
export const routes = [
  {
    path: '/',
    key: 'front',
    element: <Front />,
    children: [
      {
        path: '/',
        key: 'front-home',
        element: <Home />,
      },
      {
        path: 'movies',
        key: 'front-movie',
        element: <Movie />,
      },
      {
        key: '/notfound',
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
  {
    key: 'admin',
    path: '/admin',
    element: <Admin />,
    children: [
      {
        key: 'home',
        path: '/admin/',
        element: <AdminHome />,
      },
      {
        key: '/sys',
        path: '/admin/system',
        element: <AdminSystemManage />,
      },
      {
        key: '/user',
        path: '/admin/user',
        element: <AdminUserManage />,
      },
      {
        key: 'admin-notfound',
        path: '/admin/*',
        element: <AdminNotFound />,
      },
    ],
  },
];
