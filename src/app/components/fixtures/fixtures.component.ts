import { Component, OnInit } from '@angular/core';
import { Fixture } from '../../models/fixture';
import { FixtureService } from '../../services/fixture.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  fixtures: Fixture [];
  //No longer used
  // selectedFixture: Fixture;

  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.getFixtures();
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

}
