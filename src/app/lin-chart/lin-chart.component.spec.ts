import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinChartComponent } from './lin-chart.component';

describe('LinChartComponent', () => {
  let component: LinChartComponent;
  let fixture: ComponentFixture<LinChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
