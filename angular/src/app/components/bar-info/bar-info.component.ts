import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-info',
  templateUrl: './bar-info.component.html',
  styleUrls: ['./bar-info.component.scss']
})
export class BarInfoComponent implements OnInit {
  @Input() alt: string;
  @Input() avatar: string;
  @Input() description: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
