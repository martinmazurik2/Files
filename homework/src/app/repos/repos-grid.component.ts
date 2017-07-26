import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Sorter } from '../core/services/sorter';
import { TrackByService } from '../core/services/trackby.service';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'repos-grid',
  templateUrl: 'repos-grid.component.html',
  //When using OnPush detectors, then the framework will check an OnPush
  //component when any of its input properties changes, when it fires
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposGridComponent implements OnInit {

  @Input() repositories: any[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.repositories, prop);
  }

}
