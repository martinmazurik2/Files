import { Component, Input, OnInit, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';

import { IRepository } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

declare var module: {
  id: string;
}

@Component({
  moduleId: module.id,
  selector: 'repos-card',
  templateUrl: 'repos-card.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReposCardComponent implements OnInit {

  @Input() repositories: IRepository[] = [];

  constructor(public trackby: TrackByService) { }

  ngOnInit() {

  }

}
