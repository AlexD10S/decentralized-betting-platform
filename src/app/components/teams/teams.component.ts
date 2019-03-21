import { Component, OnInit } from '@angular/core';

import { Team } from '../../models/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams : Team [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
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

}
