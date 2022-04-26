import { Home } from '../../pages/Home';
import { Editar } from '../../pages/Home/components/Editar';
import { Filtro } from '../../pages/Home/components/Listagem/Filtro';
import { Rotas as rotasEnum } from '../../shared/enum/Rotas';
import { Rotas } from './IRotas';

export const rotas: Rotas = {
  home: {
    pathRota: rotasEnum.HOME,
    component: Home,
    nome: 'Home',
  },
  indefinida: {
    pathRota: rotasEnum.INDEFINIDA,
    component: Home,
    nome: 'Indefinida',
  },
  teste: {
    pathRota: '/teste',
    component: Filtro,
    nome: 'Teste',
  },
  sobre: {
    pathRota: rotasEnum.SOBRE,
    component: Home,
    nome: 'Sobre',
  },
  editar: {
    pathRota: rotasEnum.EDITAR,
    component: Editar,
    nome: 'Editar',
  },
};

export const rotasIds: Rotas = {};
