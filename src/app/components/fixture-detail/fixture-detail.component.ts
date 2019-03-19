import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Fixture } from '../../models/fixture';
import { FixtureService } from '../../services/fixture.service';


@Component({
  selector: 'app-fixture-detail',
  templateUrl: './fixture-detail.component.html',
  styleUrls: ['./fixture-detail.component.scss']
})
export class FixtureDetailComponent implements OnInit {
  @Input() fixture: Fixture;

  constructor(private route: ActivatedRoute, private fixtureService: FixtureService,
    private location: Location) { }

  ngOnInit() {
    this.getFixture();
  }

  getFixture(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fixtureService.getFixture(id)
      .subscribe(fixture => this.fixture = fixture);
  }

  goBack(): void {
    this.location.back();
  }

  

}
