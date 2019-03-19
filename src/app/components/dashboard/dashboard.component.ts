import { Component, OnInit } from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material'

import { Fixture } from '../../models/fixture';
import { FixtureService } from '../../services/fixture.service';
import { Team } from '../../models/team';
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

  constructor(
    private fixtureService: FixtureService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.getFixtures();
    this.getTeams();
  }

  getFixtures(): void {
    this.fixtureService.getFixtures()
      .subscribe(fixtures => this.fixtures = fixtures.slice(1, 5));
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

  bet(){
    // this.snackBar.open('Bet successfully', 'Done', {
    //   duration: 2000,
    // });
  }

}
