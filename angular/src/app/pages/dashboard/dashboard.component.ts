import { Component, OnInit } from '@angular/core';
import { IRepository, RepositoryService } from 'src/app/services/repository/repository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  repositories: IRepository[]

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    this.repositories = this.repositoryService.getLocalRepository();
  }

  getRepository(repository: string){
    if(typeof repository !== "string") return;

    this.repositoryService.getRepositoryData(repository).subscribe((reponse) => {
      const repositories = [...this.repositories, reponse];
      this.repositoryService.setRepository(repositories);
      this.repositories = repositories
    })
  }
}
