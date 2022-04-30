import { Grid, Typography, Checkbox, TextField, InputAdornment } from '@mui/material';
import React, { FC } from 'react';
import { Trash2, Pocket } from 'react-feather';
import { useDispatch } from 'react-redux';
import {
  Produto,
  marcarFinalizado,
  removerProduto,
  adicionarQuantidade,
  removerQuantidade,
} from '../../../../store/slices/ListaDeComprasSlice';
import { useNavigate } from 'react-router-dom';

interface IListaProps {
  lista: Produto[];
}

const Lista: FC<IListaProps> = ({ lista }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return lista.length ? (
    <>
      {Object.values(lista).map((item) => (
        <Grid key={item.id} mt={5} container direction="row" justifyContent="space-around" alignItems="center">
          <Grid xs={1}>
            <Checkbox
              checked={item.finalizado}
              onChange={() => dispatch(marcarFinalizado({ id: item.id, finalizado: !item.finalizado }))}
            />
          </Grid>
          <Grid xs={7} pl={1}>
            <Grid direction="row" style={{ cursor: 'pointer' }} onClick={() => navigate(`/products/edit/${item.id}`)}>
              <Typography
                variant="h5"
                style={
                  item.finalizado ? { fontWeight: 'bold', textDecoration: 'line-through' } : { fontWeight: 'bold' }
                }
              >
                {item.nome}
                {item.urgencia && <Pocket style={{ marginLeft: '5px' }} />}
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                {item.categoria}
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={1}>
            <Trash2 style={{ cursor: 'pointer' }} onClick={() => dispatch(removerProduto(item.id))} />
          </Grid>
          <Grid xs={3}>
            <TextField
              id="outlined-start-adornment"
              disabled
              value={item.quantidade}
              inputProps={{ style: { textAlign: 'center' } }}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{ cursor: 'pointer' }}
                    position="start"
                    onClick={() => dispatch(adicionarQuantidade(item))}
                  >
                    +
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start" onClick={() => dispatch(removerQuantidade(item))}>
                    -
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      ))}
    </>
  ) : (
    <Typography style={{ marginTop: '50px', color: 'grey' }} align="center" variant="h3">
      Lista vazia :(
    </Typography>
  );
};

export default Lista;
