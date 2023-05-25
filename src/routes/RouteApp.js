import { Header } from '@/components/Header';
import { NotFound } from '@/pages/NotFound';
import Home from '@/pages/home';
import { Movie } from '@/pages/movie';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routeConfig';
export const RouteApp = () => {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
