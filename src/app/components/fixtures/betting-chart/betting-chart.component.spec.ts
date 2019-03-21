import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingChartComponent } from './betting-chart.component';

describe('BettingChartComponent', () => {
  let component: BettingChartComponent;
  let fixture: ComponentFixture<BettingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
