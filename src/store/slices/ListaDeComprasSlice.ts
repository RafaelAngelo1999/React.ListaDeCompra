import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

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
  listaDeCompras: JSON.parse(localStorage.getItem('listaProdutos') as unknown as string) || [
    {
      id: '123123',
      nome: 'Nome',
      categoria: 'Comida',
      quantidade: 2,
      urgencia: true,
      finalizado: false,
    },
  ],
};

const atualizarLocalStorage = (listaProdutos: Produto[]) => {
  localStorage.setItem('listaProdutos', JSON.stringify(listaProdutos));
};

export const ListaDeComprasSlice = createSlice({
  name: 'listaDeComprasSlice',
  initialState,
  reducers: {
    marcarFinalizado: (state, action: PayloadAction<{ id: string; finalizado: boolean }>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].finalizado =
        action.payload.finalizado;
      atualizarLocalStorage(state.listaDeCompras);
    },
    adicionarQuantidade: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].quantidade =
        +state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)]
          .quantidade + 1;
      atualizarLocalStorage(state.listaDeCompras);
    },
    removerQuantidade: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)].quantidade > 1
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
      atualizarLocalStorage(state.listaDeCompras);
    },
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      action.payload.id = uuidv4();
      state.listaDeCompras.push(action.payload);
      atualizarLocalStorage(state.listaDeCompras);
      toast.success('🦄 Adicionado com sucesso!');
    },
    atualizarProduto: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[state.listaDeCompras.findIndex((produto) => produto.id === action.payload.id)] =
        action.payload;
      atualizarLocalStorage(state.listaDeCompras);
      toast.success('🦄 Atualizado com sucesso!');
    },
    removerProduto: (state, action: PayloadAction<string>) => {
      const index = state.listaDeCompras
        .map((x) => {
          return x.id;
        })
        .indexOf(action.payload);
      state.listaDeCompras.splice(index, 1);
      atualizarLocalStorage(state.listaDeCompras);
      toast.error('🦄 Removido com sucesso!');
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
