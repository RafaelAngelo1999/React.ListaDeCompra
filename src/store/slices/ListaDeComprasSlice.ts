import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface ListaDeComprasState {
  listaDeCompras: Produto[];
}

export interface Produto {
  id: string;
  nome: string;
  categoria: string;
  quantidade: number;
  urgencia: boolean;
  finalizado: boolean;
}

const initialState: ListaDeComprasState = {
  listaDeCompras: [
    { id: '123123', nome: 'Nome', categoria: 'Comida', quantidade: 2, urgencia: true, finalizado: false },
    { id: '321321', nome: 'NomeTeste', categoria: 'Limpeza', quantidade: 4, urgencia: false, finalizado: true },
  ],
};

export const ListaDeComprasSlice = createSlice({
  name: 'listaDeComprasSlice',
  initialState,
  reducers: {
    marcarFinalizado: (state, action: PayloadAction<{ id: string; finalizado: boolean }>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].finalizado =
        action.payload.finalizado;
    },
    adicionarQuantidade: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].quantidade =
        state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].quantidade +
        1;
    },
    removerQuantidade: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].quantidade > 0
        ? (state.listaDeCompras[
            state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)
          ].quantidade =
            state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)]
              .quantidade - 1)
        : state.listaDeCompras.splice(
            state.listaDeCompras
              .map((x) => {
                return x.id;
              })
              .indexOf(action.payload.id),
            1,
          );
    },
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      action.payload.id = uuidv4();
      state.listaDeCompras.push(action.payload);
    },
    atualizarProduto: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)] =
        action.payload;
    },
    removerProduto: (state, action: PayloadAction<string>) => {
      const index = state.listaDeCompras
        .map((x) => {
          return x.id;
        })
        .indexOf(action.payload);
      state.listaDeCompras.splice(index, 1);
    },
  },
});

export const {
  adicionarProduto,
  removerProduto,
  atualizarProduto,
  marcarFinalizado,
  adicionarQuantidade,
  removerQuantidade,
} = ListaDeComprasSlice.actions;

export default ListaDeComprasSlice.reducer;
