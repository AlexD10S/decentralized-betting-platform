import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { FixtureDetailComponent } from './components/fixture-detail/fixture-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCardModule, MatRadioModule, MatInputModule,MatButtonModule,MatToolbarModule,MatGridListModule, MatDialogModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { BettingChartComponent } from './components/fixtures/betting-chart/betting-chart.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FixturesComponent,
    FixtureDetailComponent,
    DashboardComponent,
    BettingChartComponent,
    TeamsComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
