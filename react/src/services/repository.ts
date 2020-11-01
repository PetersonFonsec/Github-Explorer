import { AxiosResponse } from 'axios';
import api from './api';

export interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface Issue {
  title: string;
  id: string;
  html_url: string;
  user: {
    login: string;
  };
}

class RepositoryService {
  private api = api;

  private localStorageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY ?? '';

  getRepositoryData(repository: string): Promise<AxiosResponse<IRepository>> {
    return this.api.get<IRepository>(`repos/${repository}`);
  }

  getIssue(repository: string): Promise<AxiosResponse<Issue[]>> {
    return this.api.get<Issue[]>(`repos/${repository}/issues`);
  }

  getLocalRepository(): IRepository[] {
    const storagedRepositories = localStorage.getItem(this.localStorageKey);
    return storagedRepositories ? JSON.parse(storagedRepositories) : [];
  }

  setRepository(repositories: IRepository[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(repositories));
  }
}

export default new RepositoryService();
