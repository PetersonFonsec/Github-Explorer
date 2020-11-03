import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarInfoComponent } from './bar-info.component';

describe('BarInfoComponent', () => {
  let component: BarInfoComponent;
  let fixture: ComponentFixture<BarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
