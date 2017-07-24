import { Component } from '@angular/core';
import { TextComponent } from './textbox/text.component';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-container',
  template: `<header class="navbar navbar-inner navbar-fixed-top">
      <nav class="container">
          <div class="navbar-header">
              <a href="/"><img src="images/github_icon.png" alt="logo" style="width: 50%; height: 50%"></a>
              <span class="app-title">GitHub Viewer</span>
              <my-text-box textValue="https://github.com/maxmind" (mybuttonclick)="clicked($event);"></my-text-box>
          </div>
      </nav>
  </header>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
    clicked( org:string) {
      console.log( org );
    }
}
