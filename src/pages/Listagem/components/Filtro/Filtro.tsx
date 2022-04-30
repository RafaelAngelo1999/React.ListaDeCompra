import { Grid, TextField, InputAdornment } from '@mui/material';
import debounce from 'lodash.debounce';
import React, { FC } from 'react';
import { Search } from 'react-feather';
import { useSelector } from 'react-redux';
import { State } from '../../../../store';
import { Produto } from '../../../../store/slices/ListaDeComprasSlice';

interface IFiltroProps {
  setListaDeCompras: (lista: Produto[]) => void;
}

const Filtro: FC<IFiltroProps> = ({ setListaDeCompras }) => {
  const listaDeComprasAtual = useSelector((state: State) => state.listaDeCompras.listaDeCompras);
  const [filtroAtual, setFiltroAtual] = React.useState('');

  const deboucedFiltroLista = React.useMemo(() => {
    return debounce((filtroLista) => {
      setFiltroAtual(filtroLista);
      setListaDeCompras(
        listaDeComprasAtual.filter(
          (produto) =>
            produto.nome.toUpperCase().includes(filtroLista.toUpperCase()) ||
            produto.categoria.toUpperCase().includes(filtroLista.toUpperCase()),
        ),
      );
    }, 300);
  }, [listaDeComprasAtual]);

  React.useEffect(() => {
    deboucedFiltroLista(filtroAtual);
  }, [listaDeComprasAtual]);

  return (
    <Grid mt={5} direction="column" px={2} alignItems="end">
      <TextField
        id="input-with-icon-textfield"
        label="Filtro"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="filled"
        onChange={(filtro) => deboucedFiltroLista(filtro.target.value)}
      />
    </Grid>
  );
};

export default Filtro;
