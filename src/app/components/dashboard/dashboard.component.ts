import { Component, OnInit } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material'
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Fixture } from '../../models/fixture';
import { FixtureService } from '../../services/fixture.service';
import { EthcontractService } from '../../services/ethcontract.service';
import { Team } from '../../models/team';
import { Bet } from '../../models/bet';
import { TeamService } from '../../services/team.service';
// import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fixtures: Fixture[] = [];
  teams: Team[] = [];
  public formGroup: FormGroup;

  private weiConversion = 1000000000000000000;
  totalBetInMatch = [0,0,0,0,0];

  constructor(
    private fb: FormBuilder,
    private fixtureService: FixtureService,
    private ethContractService: EthcontractService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.getFixtures();
    this.getTeams();

    this.formGroup = this.fb.group({
      betSelection: ['', [Validators.required]],
      betAmount: ['', [Validators.required]]
    });

    
  }

  getFixtures(): void {
    this.fixtureService.getFixtures()
      .subscribe(fixtures => this.getSpecialFixtures(fixtures));
  }

  getSpecialFixtures(allFixtures){
    this.fixtures = allFixtures.slice(0, 4);
    var bets: Bet [] = [new Bet(), new Bet(), new Bet()];
    for (let fixture of this.fixtures) {
      this.ethContractService.getAmountHome(fixture.id)
      .then(res => {
        bets[fixture.id - 1].amountHome = (+res) / this.weiConversion; 
        this.ethContractService.getAmountAway(fixture.id).then(res => {
          bets[fixture.id - 1].amountAway = (+res) / this.weiConversion;
          this.ethContractService.getAmountDraw(fixture.id).then(res => {
            bets[fixture.id - 1].amountDraw = (+res) / this.weiConversion;
           
            this.totalBetInMatch[fixture.id] = bets[fixture.id - 1].amountHome+bets[fixture.id - 1].amountAway+bets[fixture.id - 1].amountDraw;
          });
      });
      });
    }
  }

  getTeams(): void{
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams)
  }

  getTeam (teamId: number ): string {
    return this.teams.find(x=>x.id == teamId).name
  }

  getLogo (teamId: number ): string {
    return this.teams.find(x=>x.id == teamId).logo
  }

  bet(fixture: Fixture){
    // console.log(this.formGroup.get('betAmount').value);
    // console.log(this.formGroup.get('betSelection').value);
    this.ethContractService.bet(fixture.id,
      this.formGroup.get('betSelection').value, 
      this.formGroup.get('betAmount').value);
    // this.snackBar.open('Bet successfully', 'Done', {
    //   duration: 2000,
    // });
  }

}
