import { Component, OnInit } from '@angular/core';
import { Fixture } from '../../models/fixture';
import { Team } from '../../models/team';
import { FixtureService } from '../../services/fixture.service';
import { TeamService } from '../../services/team.service';
import { EthcontractService } from '../../services/ethcontract.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture [];
  teams : Team [];
  public formGroup: FormGroup;
  //No longer used
  // selectedFixture: Fixture;

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

    
    //this.selectedFixture = FIXTURES[0]
  }

  // No longer used
  // onSelect(fixture: Fixture): void {
  //   this.selectedFixture = fixture;
  //   console.log(JSON.stringify(this.selectedFixture));
  // }
  getFixtures(): void {
    this.fixtureService.getFixtures()
      .subscribe(fixtures => this.fixtures = fixtures)
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

  // openChart(fixture: Fixture){
  //   const dialogRef = this.dialog.open(BettingChartComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  bet(fixture: Fixture){
    // console.log(fixture);
    // console.log(this.formGroup.get('betSelection').value);
    // console.log(this.formGroup.get('betAmount').value);
    this.ethContractService.bet(fixture.id,
      this.formGroup.get('betSelection').value, 
      this.formGroup.get('betAmount').value);

    //this.ethContractService.getAccountInfo();
    // this.snackBar.open('Bet successfully', 'Done', {
    //   duration: 2000,
    // });
  }

}
