import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRepository, Issue, RepositoryService } from 'src/app/services/repository/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repository: IRepository;
  issues: Issue[];
  constructor(private repositoryService:RepositoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const repository = `${params.owner}/${params.repository}`

      this.repositoryService.getRepositoryData(repository).subscribe(repositories => {
        this.repository = repositories;
      })

      this.repositoryService.getIssue(repository).subscribe(issues => {
        this.issues = issues;
      })
    });
  }
}
