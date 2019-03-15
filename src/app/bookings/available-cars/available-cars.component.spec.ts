import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarsComponent } from './available-cars.component';

describe('AvailableCarsComponent', () => {
  let component: AvailableCarsComponent;
  let fixture: ComponentFixture<AvailableCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
