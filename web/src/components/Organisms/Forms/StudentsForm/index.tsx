import {
  FormBackground,
  FormGroup,
  FormSection,
  FormContainer,
  FormHeader
} from '@/components/Atoms/Layouts/Form/styles';
import { Button, TextField } from '@material-ui/core';
import { buttonTheme, inputTheme } from '@/utils/Config';
import { FormEvent, useRef } from 'react';
import { api } from '@/services/api';
import React from 'react';

interface StudentProps {
  student: {
    id: number;
    nome: string;
    email: string;
    cep: string;
    cidade: string;
    estado: string;
  };
  modal: {
    modalVisible: boolean;
    setModalVisible(value: boolean): any;
  };
  refetchData(): void;
}

const StudentsForm: React.FC<StudentProps> = ({
  student,
  modal,
  refetchData
}) => {

  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const cepRef = useRef(null);
  const cidadeRef = useRef(null);
  const estadoRef = useRef(null);

  const submit = (): void => {
    if (student.id != 0) {
      api
        .put(`alunos/${student.id}`, {
          name: nomeRef.current.value,
          email: emailRef.current.value,
          cep: cepRef.current.value,
          city: cidadeRef.current.value,
          state: estadoRef.current.value
        })
        .then(() => {
          modal.setModalVisible(false);
          refetchData();
        });

      return;
    }

    api
      .post('alunos', {
        name: nomeRef.current.value,
        email: emailRef.current.value,
        cep: cepRef.current.value,
        city: cidadeRef.current.value,
        state: estadoRef.current.value
      })
      .then(() => {
        modal.setModalVisible(false);
        refetchData();
      });
  };

  return (
    <FormBackground style={{ display: modal.modalVisible ? 'flex' : 'none' }}>
      <FormContainer>
        <FormHeader>
          <h2>Cadastrar Aluno</h2>
          <h1
            style={{ cursor: 'pointer' }}
            onClick={() => modal.setModalVisible(false)}
          >
            X
          </h1>
        </FormHeader>
        <FormSection>
          <FormGroup>
            <TextField
              defaultValue={student.nome}
              variant={inputTheme}
              margin="dense"
              type="text"
              label="Nome"
              inputRef={nomeRef}
            />
            <TextField
              defaultValue={student.email}
              variant={inputTheme}
              margin="dense"
              type="email"
              label="Email"
              inputRef={emailRef}
            />
          </FormGroup>
        </FormSection>
        <FormSection>
          <FormGroup>
            <TextField
              defaultValue={student.cep}
              variant={inputTheme}
              margin="dense"
              type="text"
              label="CEP"
              inputRef={cepRef}
            />
            <TextField
              defaultValue={student.cidade}
              variant={inputTheme}
              margin="dense"
              type="text"
              label="Cidade"
              inputRef={cidadeRef}
            />
            <TextField
              defaultValue={student.estado}
              variant={inputTheme}
              margin="dense"
              type="text"
              label="Estado"
              inputRef={estadoRef}
            />
          </FormGroup>
        </FormSection>
        {student.id != 0 && (
          <FormSection>
            <FormGroup>
              <TextField
                variant={inputTheme}
                margin="dense"
                type="text"
                label="Curso"
              />
            </FormGroup>
          </FormSection>
        )}
        <Button
          fullWidth
          type="submit"
          onClick={() => {
            submit();
          }}
          color="primary"
          variant={buttonTheme}
        >
          {student.id != 0 ? 'Atualizar' : 'Cadastrar'}
        </Button>
      </FormContainer>
    </FormBackground>
  );
};

export default StudentsForm;
