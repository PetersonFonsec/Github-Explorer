import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';

export interface IRepository {
  name: string;
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
@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepositoryData(repository: string): Observable<IRepository> {
    return this.http.get<IRepository>(`${environment.urlApi}repos/${repository}`);
  }

  getIssue(repository: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${environment.urlApi}repos/${repository}/issues`);
  }

  getLocalRepository(): IRepository[] {
    const storagedRepositories = localStorage.getItem(environment.storageKey);
    return storagedRepositories ? JSON.parse(storagedRepositories) : [];
  }

  setRepository(repositories) {
    localStorage.setItem(environment.storageKey, JSON.stringify(repositories));
  }
}
