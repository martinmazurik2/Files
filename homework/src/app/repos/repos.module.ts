import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { ReposRouting } from './repos.routing';

@NgModule({
  imports:      [ CommonModule, ReposRouting.routes, SharedModule ],
  declarations: [ ReposRouting.components ]
})
export class ReposModule { }
