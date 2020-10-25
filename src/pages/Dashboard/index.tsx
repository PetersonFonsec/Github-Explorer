import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositorio aqui" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41239234?s=460&u=0fd55a7ababa9a7fb42a96b653bfda7ef0f7f628&v=4"
            alt="Peterson Fonseca"
          />
          <div>
            <strong>Asteroid</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41239234?s=460&u=0fd55a7ababa9a7fb42a96b653bfda7ef0f7f628&v=4"
            alt="Peterson Fonseca"
          />
          <div>
            <strong>Asteroid</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/41239234?s=460&u=0fd55a7ababa9a7fb42a96b653bfda7ef0f7f628&v=4"
            alt="Peterson Fonseca"
          />
          <div>
            <strong>Asteroid</strong>
            <p>descrição</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
