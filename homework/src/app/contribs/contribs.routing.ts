import { Routes, RouterModule } from '@angular/router';

import { RepoContribsComponent } from './repo-contribs.component';

//import { CanDeactivateGuard } from './can-deactivate.guard';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  {
    path: 'contribs', component: RepoContribsComponent }
  //   children: [
  //     { path:'contribs',  component: RepoContribsComponent },
  //   ]
  // }
];

export const ContribsRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ RepoContribsComponent]
};
