import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';
import { ReposCardComponent } from './repos-card.component';
import { ReposGridComponent } from './repos-grid.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: 'repos', component: ReposComponent}
];

export const ReposRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ ReposComponent, ReposCardComponent, ReposGridComponent]
};
