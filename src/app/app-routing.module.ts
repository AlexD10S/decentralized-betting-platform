import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixturesComponent } from './components/fixtures/fixtures.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FixtureDetailComponent }  from './components/fixture-detail/fixture-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: FixtureDetailComponent },
  { path: 'fixtures', component: FixturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
