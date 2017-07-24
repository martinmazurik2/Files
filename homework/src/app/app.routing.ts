import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'repos/:id', loadChildren: 'app/repos/repos.module#ReposModule'},
  //{ path: 'contribs/:name', loadChildren: 'app/contribs/contribs.module#ContribsModule'},
  { path: '**', pathMatch:'full', redirectTo: '/' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);
