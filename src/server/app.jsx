import React from 'react';
import Home from '@/pages/Home';
import { RouteApp } from '@/routes/RouteApp';
import { StaticRouter } from 'react-router-dom/server';
import store from '@/store';
import { Provider } from 'react-redux';
export default ({ location, context = {} }) => {
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
};
