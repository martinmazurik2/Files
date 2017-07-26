import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../core/services/data.service';
import { IRepository } from '../shared/interfaces';
import { propertyResolver } from '../shared/property-resolver';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'repos',
  templateUrl: 'repos.component.html'
})
export class ReposComponent implements OnInit {

  title: string;
  filterText: string;
  repositories: IRepository[] = [];
  filteredRepositories: IRepository[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Repositories';
    this.filterText = 'Filter Repos:';
    this.displayMode = DisplayModeEnum.Card;

   this.dataService.getRepos("https://github.com/maxmind")
        .subscribe((repositories: IRepository[]) => {
          this.repositories = this.filteredRepositories = repositories;
        });

  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }
}

export enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
