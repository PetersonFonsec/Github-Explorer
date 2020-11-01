import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, Repositories } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import BarInfo from '../../components/bar-info/index';
import Form from '../../components/form/index';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    return storagedRepositories ? JSON.parse(storagedRepositories) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  function handleAddRepository(newRepo: string): void {
    api
      .get<Repository>(`repos/${newRepo}`)
      .then(({ data }) => setRepositories([...repositories, data]));
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form submit={(newRepo: string) => handleAddRepository(newRepo)} />
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositorios/${repository.full_name}`}
          >
            <BarInfo
              title={repository.full_name}
              description={repository.description}
              avatar={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
