import React from 'react';
import '../assets/global';
import { RouteApp } from '@/routes/RouteApp';
import Home from '@/pages/Home';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import { Provider } from 'react-redux';
export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </Provider>
  );
};
