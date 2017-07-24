import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/services/data.service';
import { IContributor } from '../shared/interfaces';
import { propertyResolver } from '../shared/property-resolver';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'contribs',
  templateUrl: 'contribs.component.html'
})
export class ContribsComponent implements OnInit {

  title: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Contributors';

    // this.dataService
    //     .subscribe((repositories: IRepository[]) => {
    //       this.repositories = this.filteredRepositories = repositories;
    //     });

  }
}
