import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/views/Home';
import { Editar } from '../../pages/Home/components/Editar';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<div>DASDAS ASDASDAS ASDASDASDAS</div>}></Route>
      <Route path="products/:id" element={<Editar />} />
    </Routes>
  );
};

export default Router;
