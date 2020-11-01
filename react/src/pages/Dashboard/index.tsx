import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title, Repositories } from './styles';
import logo from '../../assets/logo.svg';
import BarInfo from '../../components/bar-info/index';
import Form from '../../components/form/index';
import RepositoryService, { IRepository } from '../../services/repository';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<IRepository[]>(() =>
    RepositoryService.getLocalRepository(),
  );

  useEffect(() => {
    RepositoryService.setRepository(repositories);
  }, [repositories]);

  function handleAddRepository(newRepo: string): void {
    RepositoryService.getRepositoryData(newRepo).then(({ data }) =>
      setRepositories([...repositories, data]),
    );
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
