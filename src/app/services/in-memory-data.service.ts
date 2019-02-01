import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const fixtures = [
      { id: 11, localTeam: 'Team1', awayTeam: 'Team2' , goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 12, localTeam: 'Team3', awayTeam: 'Team4' , goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 13, localTeam: 'Team5', awayTeam: 'Team6' , goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 14, localTeam: 'Team7', awayTeam: 'Team8' , goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 15, localTeam: 'Team9', awayTeam: 'Team10', goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 16, localTeam: 'Team11', awayTeam: 'Team12', goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 17, localTeam: 'Team13', awayTeam: 'Team14', goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 18, localTeam: 'Team15', awayTeam: 'Team16', goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 19, localTeam: 'Team17', awayTeam: 'Team18', goalsLocalTeam: 0, goalsAwayTeam:0 },
      { id: 20, localTeam: 'Team19', awayTeam: 'Team20', goalsLocalTeam: 0, goalsAwayTeam:0 }
    ];
    return {fixtures};
  }

  // Overrides the genId method to ensure that a fixture always has an id.
  // If the fixtures array is empty,
  // the method below returns the initial number (11).
  // if the fixtures array is not empty, the method below returns the highest
  // fixture id + 1.
  genId(fixtures: Fixture[]): number {
    return fixtures.length > 0 ? Math.max(...fixtures.map(fixture => fixture.id)) + 1 : 11;
  }
}
