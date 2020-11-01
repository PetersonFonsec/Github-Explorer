/* eslint-disable react/prop-types */
import React, { useState, FormEvent } from 'react';
import { Form, Error } from './styles';

type FormProps = {
  submit: (newRepo: string) => void;
};

const FormComponent: React.FC<FormProps> = ({ submit }) => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');

  const resetForm = (): void => {
    setInputError('');
    setNewRepo('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (newRepo) {
      try {
        submit(newRepo);
        resetForm();
      } catch (error) {
        setInputError('Erro na busca por esse repositório');
      }
    } else {
      setInputError('Digite o autor/nome do repositório');
    }
  };

  return (
    <>
      <Form hasError={!!inputError} onSubmit={e => handleSubmit(e)}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
    </>
  );
};

export default FormComponent;
