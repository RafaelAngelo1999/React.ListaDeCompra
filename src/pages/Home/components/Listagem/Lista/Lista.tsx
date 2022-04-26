import { Grid, Typography, Checkbox, TextField, InputAdornment } from '@mui/material';
import React, { FC } from 'react';
import { Trash2, Pocket } from 'react-feather';
import { IItem } from '../../../../../shared/models/IItem';

interface IListaProps {
  lista: IItem[];
}

const Lista: FC<IListaProps> = ({ lista }) => {
  return (
    <>
      {Object.values(lista).map((item) => (
        <Grid key={item.id} mt={5} container direction="row" justifyContent="space-around" alignItems="center">
          <Grid item xs={1}>
            <Checkbox defaultChecked />
          </Grid>
          <Grid item xs={7} pl={1}>
            <Grid direction="row">
              <Typography
                variant="h5"
                style={item.marcado ? { fontWeight: 'bold', textDecoration: 'line-through' } : { fontWeight: 'bold' }}
              >
                {item.nome}
                {item.urgencia && <Pocket style={{ marginLeft: '5px' }} />}
              </Typography>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                {item.categoria}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Trash2 />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-start-adornment"
              value={item.quantidade}
              inputProps={{ style: { textAlign: 'center' } }}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" onClick={() => console.log('teste')}>
                    +
                  </InputAdornment>
                ),
                endAdornment: <InputAdornment position="start">-</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Lista;
