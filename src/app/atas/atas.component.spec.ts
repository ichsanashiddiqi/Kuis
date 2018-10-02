import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtasComponent } from './atas.component';

describe('AtasComponent', () => {
  let component: AtasComponent;
  let fixture: ComponentFixture<AtasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
