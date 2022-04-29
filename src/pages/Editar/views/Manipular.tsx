import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../store';
import { useParams } from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import { Header } from '../components/Header';
import { Produto } from '../../../store/slices/ListaDeComprasSlice';

const Manipular: FC = () => {
  const { idProduto } = useParams();
  const listaDeComprasAtual = useSelector((state: State) => state.listaDeCompras.listaDeCompras);

  const isEdit = !!idProduto && listaDeComprasAtual.filter((produto: Produto) => produto.id === idProduto).length > 0;

  return (
    <>
      <Header isEdit={isEdit} />
      <Formulario idProduto={idProduto} isEdit={isEdit} />
    </>
  );
};

export default Manipular;
