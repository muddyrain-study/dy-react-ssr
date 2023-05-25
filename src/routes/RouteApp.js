import { Header } from '@/components/Header';
import { NotFound } from '@/pages/NotFound';
import Home from '@/pages/home';
import { Movie } from '@/pages/movie';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const RouteApp = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
