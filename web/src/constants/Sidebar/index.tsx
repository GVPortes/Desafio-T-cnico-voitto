import { FaUser } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import React from 'react';

export const sidebarData: SidebarItemProps[] = [
  {
    uid: '/alunos',
    title: 'Alunos',
    icon: <FaUser size={25} />
  },
  {
    uid: '/logic-test',
    title: 'Teste de lógica',
    icon: <BsGraphUp size={25} />
  }
];
