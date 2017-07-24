import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { ContribsRouting } from './contribs.routing';

@NgModule({
  imports:      [ CommonModule, ContribsRouting.routes, SharedModule ],
  declarations: [ ContribsRouting.components ],
})
export class ContribsModule { }
