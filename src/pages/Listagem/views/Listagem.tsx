import React, { FC } from 'react';
import { CssBaseline } from '@mui/material';
import { Filtro } from '../components/Filtro';
import { Header } from '../components/Header';
import { Lista } from '../components/Lista';
import { useSelector } from 'react-redux';
import { State } from '../../../store';

const Listagem: FC = () => {
  const [listaDeCompras, setListaDeCompras] = React.useState(
    useSelector((state: State) => state.listaDeCompras.listaDeCompras),
  );

  return (
    <>
      <CssBaseline />
      <Header />
      <Filtro setListaDeCompras={(lista) => setListaDeCompras(lista)} />
      <Lista lista={listaDeCompras} />
    </>
  );
};

export default Listagem;
