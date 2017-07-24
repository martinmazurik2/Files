import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReposModule } from './repos/repos.module';
import { ContribsModule } from './contribs/contribs.module';

import { app_routing } from './app.routing';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { TextComponent } from './textbox/text.component';

@NgModule({
  imports: [
    BrowserModule,
    app_routing,
    ReposModule,
    ContribsModule,
    CoreModule,   // Singleton objects
    SharedModule  // Shared (multi-instance) objects
  ],
  declarations: [ AppComponent, TextComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
