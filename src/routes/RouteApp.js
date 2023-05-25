import { Header } from '@/components/Header';
import { Front } from '@/pages/Front';
import { NotFound } from '@/pages/NotFound';
import { Home } from '@/pages/home';
import { Movie } from '@/pages/movie';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './routeConfig';

// 递归函数
const routerViews = routerItems => {
  if (routerItems && routerItems.length) {
    return routerItems.map(({ path, key, element, children, redirect }) => {
      if (children && children.length) {
        return (
          <Route key={key || path} path={path} element={element}>
            {routerViews(children)}
          </Route>
        );
      } else {
        return <Route key={key || path} path={path} element={element}></Route>;
      }
    });
  }
};

export const RouteApp = () => {
  return <Routes>{routerViews(routes)}</Routes>;
};
