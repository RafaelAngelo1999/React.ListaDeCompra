import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Listagem } from '../../pages/Listagem';
import { Manipular } from '../../pages/Editar';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Listagem />} />
      <Route path="products/add" element={<Manipular />} />
      <Route path="products/edit/:idProduto" element={<Manipular />} />
    </Routes>
  );
};

export default Router;
