import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from 'src/app/services/repository/repository.service';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss']
})
export class RepositoryInfoComponent implements OnInit {
  @Input() repository: IRepository
  constructor() { }

  ngOnInit(): void {
  }

}
