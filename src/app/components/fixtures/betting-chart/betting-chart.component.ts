import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-betting-chart',
  templateUrl: './betting-chart.component.html',
  styleUrls: ['./betting-chart.component.scss']
})
export class BettingChartComponent implements OnInit {

  // @Input() data;

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
