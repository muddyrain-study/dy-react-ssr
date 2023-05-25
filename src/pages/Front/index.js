import { Header } from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
export const Front = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
};
