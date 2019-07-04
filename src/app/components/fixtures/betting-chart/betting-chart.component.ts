import { Component, OnInit,Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { EthcontractService } from '../../../services/ethcontract.service';

@Component({
  selector: 'app-betting-chart',
  templateUrl: './betting-chart.component.html',
  styleUrls: ['./betting-chart.component.scss']
})
export class BettingChartComponent implements OnInit {

  @Input() data;
  teams : Team [];

  totalBetInMatch = 0;
  private weiConversion = 1000000000000000000;

  public doughnutChartLabels: Label[];
  public doughnutChartData = [33,33,33];
  public doughnutChartType = 'doughnut';

  constructor(
    private teamService: TeamService,
    private ethContractService: EthcontractService) { }

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
    var amount1;
    var amount2;
    var amount3;
    this.ethContractService.getAmountHome(this.data.id)
    .then(res => {
      amount1 = (+res) / this.weiConversion;
      this.ethContractService.getAmountAway(this.data.id).then(res => {
        amount2 = (+res) / this.weiConversion;
        this.ethContractService.getAmountDraw(this.data.id).then(res => {
          amount3 = (+res) / this.weiConversion;
          console.log("match:"+this.data.id);
          console.log("Home:"+amount1 + " Draaw:"+amount3+"Away:"+amount2);
          this.totalBetInMatch = amount1+amount2+amount3;
          console.log(this.totalBetInMatch);
          if(this.totalBetInMatch > 0){
            console.log(this.data.id);
            var percentAmount1 = (amount1/this.totalBetInMatch) * 100;
            var percentAmount2 = (amount2/this.totalBetInMatch) * 100;
            var percentAmount3 = (amount3/this.totalBetInMatch) * 100;
            this.doughnutChartData = [percentAmount1,percentAmount3,percentAmount2];
          }
        });
    });
    });
    
    

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
