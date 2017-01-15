import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesRetrieverService {
  apiKey: string; 
  constructor(private jsonp: Jsonp) { 
    this.apiKey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    console.log("Movies Service is ready");
  }

  getPopular(){
    var search = new URLSearchParams();
    search.set('sort_by', 'popular.desc');
    search.set('api_key', this.apiKey);
    return this.jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK',{search})
      .map(response => {
        return response.json();
      });
  }

  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apiKey);
    console.log("search is", search);
    return this.jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
}
