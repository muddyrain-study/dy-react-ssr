import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Admin({ route }) {
  return (
    <div>
      <h1>后台页面</h1>
      <nav>
        <Link to='/admin/user'>用户管理</Link>
        <Link to='/admin/system' style={{ marginLeft: 100 }}>
          系统管理
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
