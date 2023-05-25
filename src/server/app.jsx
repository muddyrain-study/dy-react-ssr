import React from 'react';
import Home from '@/pages/Home';
import { RouteApp } from '@/routes/RouteApp';
import { StaticRouter } from 'react-router-dom/server';
export default ({ location, context = {} }) => {
  return (
    <StaticRouter location={location} context={context}>
      <RouteApp />
    </StaticRouter>
  );
};
