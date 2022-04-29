import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { Filtro } from '../components/Filtro';
import { Header } from '../components/Header';
import { Lista } from '../components/Lista';
import { useSelector } from 'react-redux';
import { State } from '../../../store';

const Listagem: FC = () => {
  const listaDeComprasAtual = useSelector((state: State) => state.listaDeCompras.listaDeCompras);

  return (
    <>
      <CssBaseline />
      <Header />
      <Filtro />
      <Lista lista={listaDeComprasAtual} />
    </>
  );
};

export default Listagem;
