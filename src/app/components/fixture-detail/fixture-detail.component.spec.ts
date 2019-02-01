import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDetailComponent } from './fixture-detail.component';

describe('FixtureDetailComponent', () => {
  let component: FixtureDetailComponent;
  let fixture: ComponentFixture<FixtureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
