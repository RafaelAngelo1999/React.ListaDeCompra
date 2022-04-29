import React, { FC, useEffect } from 'react';

import { Grid, Box, Button, MenuItem, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../../store';
import {
  Produto,
  removerProduto,
  adicionarProduto,
  atualizarProduto,
} from '../../../../store/slices/ListaDeComprasSlice';

import { toast } from 'react-toastify';
import { categorias } from '../../../../shared/models/IItem';

interface IFormularioProps {
  idProduto: string | undefined;
  isEdit: boolean;
}

const Formulario: FC<IFormularioProps> = ({ idProduto, isEdit }) => {
  const dispatch = useDispatch();
  const produtoAtual = useSelector((state: State) =>
    state.listaDeCompras.listaDeCompras.find((produto: Produto) => produto.id === idProduto),
  );

  const { handleSubmit, control, reset } = useForm({
    mode: 'onSubmit',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (produtoAtual) {
      reset(produtoAtual);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produtoAtual as Produto]);

  // eslint-disable @typescript-eslint/no-explicit-any
  const editarOuCriarProduto = (data: Produto) => {
    if (isEdit) {
      dispatch(atualizarProduto(data));
      toast.success('🦄 Atualizado com sucesso!');
    } else {
      dispatch(adicionarProduto(data));
      toast.success('🦄 Criado com sucesso!');
    }
    navigate('/');
  };

  const excluirProduto = () => {
    produtoAtual && dispatch(removerProduto(produtoAtual?.id));
    toast.success('🦄 Excluido com sucesso!');
    navigate('/');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data) => {
        editarOuCriarProduto(data as Produto);
      })}
      noValidate
      sx={{ mt: 1 }}
    >
      <Controller
        name="nome"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box mb={4} height={80}>
            <TextField
              margin="normal"
              fullWidth
              id="nome"
              label="Nome"
              autoFocus
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          </Box>
        )}
        rules={{
          required: 'Nome é obrigatorio',
          pattern: { value: /^.{3,}$/, message: 'Nome deve contem no minimo 3 caracteres' },
        }}
      />
      <Controller
        name="categoria"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box height={100}>
            <TextField
              id="categoria"
              select
              fullWidth
              label="Categoria"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            >
              {categorias.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
        rules={{
          required: 'Categoria obrigatoria',
        }}
      />
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Grid item mb={4} xs={4} height={80}>
          <Controller
            name="quantidade"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type={'number'}
                fullWidth
                label="Quantidade"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              ></TextField>
            )}
            rules={{
              required: 'Quantidade Obrigatoria',
            }}
          />
        </Grid>
        <Grid item xs={2} height={80}>
          <Controller
            name="urgencia"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <FormControlLabel
                control={<Checkbox checked={value} onChange={onChange} name="Urgencia" />}
                label="Urgencia"
              />
            )}
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained">
        {isEdit ? 'Editar' : 'Criar'}
      </Button>
      {isEdit && (
        <Button onClick={excluirProduto} fullWidth variant="contained" sx={{ mt: 3 }}>
          Excluir
        </Button>
      )}
      <Button onClick={() => navigate('/')} fullWidth variant="contained" sx={{ mt: 3 }}>
        Voltar
      </Button>
    </Box>
  );
};

export default Formulario;
