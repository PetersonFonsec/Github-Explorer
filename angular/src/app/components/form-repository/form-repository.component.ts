import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-repository',
  templateUrl: './form-repository.component.html',
  styleUrls: ['./form-repository.component.scss']
})
export class FormRepositoryComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm
  @Output() submit = new EventEmitter()
  value: String

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.value = " ";
  }

  onSubmit(e) {
    e.preventDefault();
    this.submit.emit(this.value);
    this.reset();
  }
}
