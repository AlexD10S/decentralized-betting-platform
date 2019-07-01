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
      { id: 0, localTeam: 2, awayTeam: 8 , localVictory: 0, draw:0, awayVictory:0, date:'08/03 21:00'},
      { id: 1, localTeam: 1, awayTeam: 7 , localVictory: 0, draw:0, awayVictory:0, date:'09/03 13:00'},
      { id: 2, localTeam: 3, awayTeam: 12 , localVictory: 0, draw:0, awayVictory:0, date:'09/03 16:15'},
      { id: 3, localTeam: 4, awayTeam: 14 , localVictory: 0, draw:0, awayVictory:0, date:'09/03 18:30'},
      { id: 4, localTeam: 9, awayTeam: 11 , localVictory: 0, draw:0, awayVictory:0, date:'09/03 20:45'},
      { id: 5, localTeam: 6, awayTeam: 5 , localVictory: 0, draw:0, awayVictory:0, date:'10/03 12:00'},
      { id: 6, localTeam: 10, awayTeam: 18 , localVictory: 0, draw:0, awayVictory:0, date:'10/03 16:15'},
      { id: 7, localTeam: 13, awayTeam: 20 , localVictory: 0, draw:0, awayVictory:0, date:'10/03 18:30'},
      { id: 8, localTeam: 17, awayTeam: 16 , localVictory: 0, draw:0, awayVictory:0, date:'10/03 18:30'},
      { id: 9, localTeam: 19, awayTeam: 15 , localVictory: 0, draw:0, awayVictory:0, date:'10/03 20:45'},
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
      {id: 10, name: 'Girona', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/2893.png'},
      {id: 11, name: 'Huesca', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/2894.png'},
      {id: 12, name: 'Leganés', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/957.png'},
      {id: 13, name: 'Levante', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/855.png'},
      {id: 14, name: 'Rayo', logo:'https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/184.png'},
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
