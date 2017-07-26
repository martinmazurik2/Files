import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IRepository, IContributor } from '../../shared/interfaces';

@Injectable()
export class DataService {

    repositoriesBaseUrl: string = '/api/repositories';
    ordersBaseUrl: string = 'api/contributors';
    fullRepositories: Object;
    repositories: IRepository[];
    contributors: IContributor[];


    constructor(private http: Http) { }
    // retrieves all repository info from GitHub based on the organization, then we pick out the stuff we wantinto IRepository array
    getRepos(orgUrl:string) : Observable<IRepository[]> {
        var fs = require('fs');

        var aRepo = <IRepository> { id: 0, name: "", description: "", owner: "", size: 0 };

        return this.http.get(this.repositoriesBaseUrl)
                    .map((res: Response) => {
                        this.repositories = res.json();
                        return this.repositories;
                    })
                    .catch(this.handleError);
        
    }

    getContribs(owner: string, repoName: string) : Observable<IContributor[]> {
      return this.http.get(this.ordersBaseUrl + "/" + owner + "/" + repoName )
                .map((res: Response) => res.json())
                .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
}
