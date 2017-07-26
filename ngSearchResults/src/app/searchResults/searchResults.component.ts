import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-results',
  templateUrl: './searchResults.component.html',
  styleUrls: ['./searchResults.component.css']
})
export class SearchResultsComponent {
  searchinput: string;

  search()
  {
     this.searchinput = 'called'; //new TestModel()).map(o => JSON.stringify(o));'called!'
  }
}
