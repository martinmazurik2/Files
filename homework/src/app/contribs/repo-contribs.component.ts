import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/services/data.service';
import { IRepository, IContributor} from '../shared/interfaces';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'repo-contibs',
  templateUrl: 'repo-contribs.component.html'
})
export class RepoContribsComponent implements OnInit {

  contributors: IContributor[] = [];
  repositories: IRepository;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up
      this.route.parent.params.subscribe((params: Params) => {
        let owner = "" + params['owner'];
        let repo = "" + +params['repoName'];
        this.dataService.getContribs( owner, repo ).subscribe((contributors: IContributor[]) => {
          this.contributors = contributors;
        });
      });
  }



}
