import React from 'react';
import '../assets/global';
import { RouteApp } from '@/routes/RouteApp';
import Home from '@/pages/Home';
import { BrowserRouter } from 'react-router-dom';
export default () => {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  );
};
