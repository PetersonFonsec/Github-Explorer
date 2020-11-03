import { Component, OnInit } from '@angular/core';
import { IRepository, Issue } from 'src/app/services/repository/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repository: IRepository;
  issues: Issue[];
  constructor() { }

  ngOnInit(): void {
  }

}
