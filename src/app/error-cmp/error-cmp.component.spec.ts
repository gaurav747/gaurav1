import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCmpComponent } from './error-cmp.component';

describe('ErrorCmpComponent', () => {
  let component: ErrorCmpComponent;
  let fixture: ComponentFixture<ErrorCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
