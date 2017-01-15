import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'vil-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  @Input() query: string = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
}
