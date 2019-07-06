import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Fixture } from '../models/fixture';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const fixtures = [
      { id: 0, localTeam: 2, awayTeam: 4 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 1, localTeam: 6, awayTeam: 15 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 2, localTeam: 3, awayTeam: 9 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 3, localTeam: 18, awayTeam: 16 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 4, localTeam: 8, awayTeam: 17 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 5, localTeam: 12, awayTeam: 10 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 6, localTeam: 1, awayTeam: 13 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 7, localTeam: 11, awayTeam: 7 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 8, localTeam: 5, awayTeam: 19 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
      { id: 9, localTeam: 20, awayTeam: 14 , localVictory: 0, draw:0, awayVictory:0, date:'18/08 18:30'},
    ];
    const teams = [
      {id: 1, name: 'Alavés', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/173.png'},
      {id: 2, name: 'Athletic', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/174.png'},
      {id: 3, name: 'Atlético', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/175.png'},
      {id: 4, name: 'Barcelona', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/178.png'},
      {id: 5, name: 'Betis', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/185.png'},
      {id: 6, name: 'Celta', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/176.png'},
      {id: 7, name: 'Eibar', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/953.png'},
      {id: 8, name: 'Espanyol', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/177.png'},
      {id: 9, name: 'Getafe', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/1450.png'},
      {id: 10, name: 'Osasuna', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/450.png'},
      {id: 11, name: 'Mallorca', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/181.png'},
      {id: 12, name: 'Leganés', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/957.png'},
      {id: 13, name: 'Levante', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/855.png'},
      {id: 14, name: 'Granada', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/5683.png'},
      {id: 15, name: 'Real Madrid', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/186.png'},
      {id: 16, name: 'Real Sociedad', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/188.png'},
      {id: 17, name: 'Sevilla', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/179.png'},
      {id: 18, name: 'Valencia', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/191.png'},
      {id: 19, name: 'Valladolid', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/192.png'},
      {id: 20, name: 'Villarreal', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/449.png'}
    ];
    return {fixtures, teams};
  }


  // Overrides the genId method to ensure that a fixture always has an id.
  // If the fixtures array is empty,
  // the method below returns the initial number (11).
  // if the fixtures array is not empty, the method below returns the highest
  // fixture id + 1.
  genId<T extends Fixture | Team>(myTable: T[]): number {
    // return fixtures.length > 0 ? Math.max(...fixtures.map(fixture => fixture.id)) + 1 : 11;
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
