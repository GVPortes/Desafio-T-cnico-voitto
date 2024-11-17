import React, { useEffect, useState } from 'react';

import {
  Container,
  Table,
  Head,
  Item,
  BodyLine,
  Message,
  TableMobile
} from './styles';

import { api } from '@/services/api';
import { toast } from 'react-toastify';
import useWindowSize from '@/hooks/useWindowSize';
import { Button } from '@material-ui/core';
import { buttonTheme } from '@/utils/Config';
import StudentsForm from '../../Forms/StudentsForm';

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const mobile = useWindowSize().width < 900;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentStudent, setCurrentStudent] = useState<Student>();

  const fetchStudents = async (): Promise<void> => {
    api
      .get('alunos')
      .then(res => {
        setStudents(res.data);
      })
      .catch(() => {
        toast('Confira a API', {
          position: toast.POSITION.BOTTOM_CENTER,
          type: 'error',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const openCreateStudentModal = (): void => {
    setCurrentStudent({
      id: 0,
      nome: '',
      email: '',
      cep: '',
      cidade: '',
      estado: ''
    });
    setModalVisible(true);
  };

  const openUpdateStudentModal = (student: Student): void => {
    setCurrentStudent(student);
    setModalVisible(true);
  };

  const openDeleteStudentModal = (id: number): void => {
    api.delete(`alunos/${id}`).then(() => {
      toast('Usuário deletado', {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'success',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      fetchStudents();
    });
  };

  return (
    <Container>
      <header>
        <Button
          fullWidth
          onClick={() => openCreateStudentModal()}
          color="primary"
          variant={buttonTheme}
        >
          Adicionar usuário
        </Button>
      </header>
      {modalVisible && (
        <StudentsForm
          modal={{ modalVisible, setModalVisible }}
          refetchData={fetchStudents}
          student={currentStudent}
        />
      )}
      {students ? (
        !mobile ? (
          <>
            <Table>
              <Head>
                <Item> ID </Item>
                <Item> Nome </Item>
                <Item> E-Mail </Item>
                <Item> cep </Item>
                <Item> estado </Item>
                <Item> cidade </Item>
                <Item> EDITAR </Item>
                <Item> EXCLUIR </Item>
              </Head>
              {students &&
                students.map((student, key) => (
                  <BodyLine key={key}>
                    <Item> {student.id} </Item>
                    <Item> {student.nome} </Item>
                    <Item> {student.email} </Item>
                    <Item> {student.cep} </Item>
                    <Item> {student.estado} </Item>
                    <Item> {student.cidade} </Item>
                    <Item>
                      <button onClick={() => openUpdateStudentModal(student)}>
                        editar
                      </button>
                    </Item>
                    <Item>
                      <button
                        onClick={() => openDeleteStudentModal(student.id)}
                      >
                        excluir
                      </button>
                    </Item>
                  </BodyLine>
                ))}
            </Table>
          </>
        ) : (
          <>
            {students &&
              students.map((student, key) => (
                <TableMobile>
                  <Head>
                    <Item> ID </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.id} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Nome </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.nome} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Email </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.email} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Cep </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.cep} </Item>
                  </BodyLine>
                  <Head>
                    <Item> Estado</Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.estado} </Item>
                  </BodyLine>
                  <Head>
                    <Item>Cidade </Item>
                  </Head>
                  <BodyLine key={key}>
                    <Item> {student.cidade} </Item>
                  </BodyLine>
                </TableMobile>
              ))}
          </>
        )
      ) : (
        <Message>
          <p>Você ainda não fez nenhuma alteração</p>
        </Message>
      )}
    </Container>
  );
};

export default StudentTable;
