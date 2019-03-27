import { Component, OnInit,Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-betting-chart',
  templateUrl: './betting-chart.component.html',
  styleUrls: ['./betting-chart.component.scss']
})
export class BettingChartComponent implements OnInit {

  @Input() data;
  teams : Team [];

  public doughnutChartLabels: Label[];
  public doughnutChartData = [33, 33, 33];
  public doughnutChartType = 'doughnut';

  constructor( private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
    
  }

  getTeams(): void{
    this.teamService.getTeams()
      .subscribe(teams => 
       this.fillChart(teams))
  }

  fillChart(teams: Team[]){
    this.teams = teams;

    this.doughnutChartLabels = [
      this.getTeam(this.data.localTeam), 
      'Draw', 
      this.getTeam(this.data.awayTeam)
    ];
  }
  getTeam (teamId: number): string {
    return this.teams.find(x=>x.id == teamId).name
  }

}
