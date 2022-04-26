import React from 'react';

export interface Rota {
  pathRota: string;
  component: React.FC;
  nome: string;
}

export interface Rotas {
  [key: string]: Rota;
}
