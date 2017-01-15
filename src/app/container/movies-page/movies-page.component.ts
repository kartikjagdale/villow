import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MoviesRetrieverService } from '../../services/movies-retriever.service';

@Component({
  selector: 'vil-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  movies;
  constructor(private _moviesService: MoviesRetrieverService ) { }

  ngOnInit() {
  }

  searchMovies(queryBox){
  console.log("QUery Box", queryBox.value);
  this._moviesService.searchMovies(queryBox.value).subscribe(res => {
      this.movies = res.results;
    })

  }
}
