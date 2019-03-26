import { Component, OnInit } from '@angular/core';
import { Fixture } from '../../models/fixture';
import { Team } from '../../models/team';
import { FixtureService } from '../../services/fixture.service';
import { TeamService } from '../../services/team.service';



@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture [];
  teams : Team [];
  //No longer used
  // selectedFixture: Fixture;

  constructor(
    private fixtureService: FixtureService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.getFixtures();
    this.getTeams();
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

}
