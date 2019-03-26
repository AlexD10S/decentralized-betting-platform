import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-betting-chart',
  templateUrl: './betting-chart.component.html',
  styleUrls: ['./betting-chart.component.scss']
})
export class BettingChartComponent implements OnInit {

  // @Input() data;

  public doughnutChartLabels = ['Team 1', 'Draw', 'Team 2'];
  public doughnutChartData = [33, 33, 33];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
