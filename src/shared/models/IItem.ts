export interface IItem {
  id: number;
  nome: string;
  categoria: string;
  urgencia: boolean;
  quantidade: number;
  marcado: boolean;
}

export const LISTA: IItem[] = [
  {
    id: 1,
    nome: 'Abacaxi',
    categoria: 'Fruta',
    urgencia: true,
    quantidade: 2,
    marcado: false,
  },
  {
    id: 2,
    nome: 'Detergente',
    categoria: 'Limpeza',
    urgencia: false,
    quantidade: 3,
    marcado: true,
  },
];
