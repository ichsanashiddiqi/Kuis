import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tugass3Component } from './tugass3.component';

describe('Tugass3Component', () => {
  let component: Tugass3Component;
  let fixture: ComponentFixture<Tugass3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tugass3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tugass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
