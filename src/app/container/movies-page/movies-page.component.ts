import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MoviesRetrieverService } from '../../services/movies-retriever.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as movie from '../../actions/movie';
import { Movie } from '../../models/movie';

@Component({
  selector: 'vil-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  searchQuery$: Observable<string>;
  movies$: Observable<Movie[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) { 
    this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
    this.movies$ = store.select(fromRoot.getSearchResults);
    this.loading$ = store.select(fromRoot.getSearchLoading);
  }
  
  /** Search Movies */
  search(query: string){
    this.store.dispatch(new movie.SearchAction(query));
  }
}
