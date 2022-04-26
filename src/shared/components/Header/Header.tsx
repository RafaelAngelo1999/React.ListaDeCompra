import { Grid, Typography, Button } from '@mui/material';
import React, { FC } from 'react';
import { Plus } from 'react-feather';

const Header: FC = () => {
  return (
    <>
      <Grid mt={5} px={2} container direction="row" justifyContent="space-around" alignItems="center">
        <Grid container justifyContent="center" alignItems="center" xs={7}>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            Minha Lista
          </Typography>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" xs={5}>
          <Button variant="outlined" endIcon={<Plus />}>
            Add Item
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
