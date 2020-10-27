import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params);
  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={20} /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://dummyimage.com/600x400/000/fff" alt="testge" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descroção</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repositorio">
          <div>
            <strong>repository.full_name</strong>
            <p>epository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
