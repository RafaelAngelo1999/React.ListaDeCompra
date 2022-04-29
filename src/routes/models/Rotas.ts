import { Manipular } from '../../pages/Editar';
import { Listagem } from '../../pages/Listagem';
import { Filtro } from '../../pages/Listagem/components/Filtro';
import { Rotas as rotasEnum } from '../../shared/enum/Rotas';
import { Rotas } from './IRotas';

export const rotas: Rotas = {
  home: {
    pathRota: rotasEnum.HOME,
    component: Listagem,
    nome: 'Home',
  },
  indefinida: {
    pathRota: rotasEnum.INDEFINIDA,
    component: Listagem,
    nome: 'Indefinida',
  },
  teste: {
    pathRota: '/teste',
    component: Filtro,
    nome: 'Teste',
  },
  sobre: {
    pathRota: rotasEnum.SOBRE,
    component: Listagem,
    nome: 'Sobre',
  },
  editar: {
    pathRota: rotasEnum.EDITAR,
    component: Manipular,
    nome: 'Editar',
  },
};

export const rotasIds: Rotas = {};
