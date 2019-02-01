import { Component, OnInit } from '@angular/core';

import { Fixture } from '../../models/fixture';
import { FixtureService } from '../../services/fixture.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fixtures: Fixture[] = [];

  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.getFixtures();
  }

  getFixtures(): void {
    this.fixtureService.getFixtures()
      .subscribe(fixtures => this.fixtures = fixtures.slice(1, 5));
  }

}
