import { Injectable } from '@angular/core';

import { IRepository, IContributor } from '../../shared/interfaces';

@Injectable()
export class TrackByService {

  repository(index:number, repository: IRepository) {
    return repository.id;
  }

}
