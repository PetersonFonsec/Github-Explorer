import { Component, Input, OnInit } from '@angular/core';
import {IRepository} from '../../services/repository/repository.service';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss']
})
export class ListRepositoriesComponent implements OnInit {
  @Input() repositories: IRepository[];
  constructor() { }

  ngOnInit(): void {
  }

}
