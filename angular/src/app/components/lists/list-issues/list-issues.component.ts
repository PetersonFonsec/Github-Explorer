import { Component, Input, OnInit } from '@angular/core';
import {Issue} from '../../../services/repository/repository.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list-issues.component.html',
  styleUrls: ['./list-issues.component.scss']
})
export class ListIssuesComponent implements OnInit {
  @Input() issues: Issue[]
  constructor() { }

  ngOnInit(): void {
  }

}
