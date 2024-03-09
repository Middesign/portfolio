import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AboutComponent } from './about/about.component';
import { DetailsType01Component } from './details-type01/details-type01.component';
import { RouteGuardService } from './route-guard.service';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'processing',
    component: UnderConstructionComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'password', component: PasswordComponent },
  {
    path: 'details',
    component: DetailsType01Component,
    canActivate: [RouteGuardService],
  },
  {
    path: 'details-page',
    component: DetailsType01Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
