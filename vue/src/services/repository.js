import api from './api';

class RepositoryService {
  api = api;
  localStorageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY ?? '@GithubExplorer:repositories';

  getRepositoryData(repository) {
    return this.api.get(`repos/${repository}`);
  }

  getIssue(repository) {
    return this.api.get(`repos/${repository}/issues`);
  }

  getLocalRepository() {
    const storagedRepositories = localStorage.getItem(this.localStorageKey);
    return storagedRepositories ? JSON.parse(storagedRepositories) : [];
  }

  setRepository(repositories) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(repositories));
  }
}

export default new RepositoryService();
