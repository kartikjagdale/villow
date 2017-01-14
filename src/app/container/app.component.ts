import { Component } from '@angular/core';
import { MoviesRetrieverService } from '../services/movies-retriever.service';

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  movies: Array<Object>;
  constructor(private moviesRetriver: MoviesRetrieverService){
    this.moviesRetriver.getPopular()
        .subscribe(response => {
          this.movies = response.results;
        });
  }
  
  title = 'vil works!';
}
