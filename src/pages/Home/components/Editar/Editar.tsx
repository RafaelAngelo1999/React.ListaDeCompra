import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const Editar: FC = () => {
  const { id } = useParams();
  console.log(id);
  return <>`${id}`</>;
};

export default Editar;
