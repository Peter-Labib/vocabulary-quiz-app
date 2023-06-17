import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Questions from '../view/Questions';
import NotFound from '../view/NotFound';
import Rank from '../view/Rank';

const routes = [
  {
    path: '/',
    element: <Questions />,
  },
  {
    path: '/rank',
    element: <Rank />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
