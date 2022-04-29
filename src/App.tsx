import React from 'react';
import Container from '@mui/material/Container';
import { Router } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <ToastContainer />
        <Router />
      </Container>
    </Provider>
  );
}

export default App;
