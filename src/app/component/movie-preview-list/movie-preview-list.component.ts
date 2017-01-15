import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'vil-movie-preview-list',
  templateUrl: './movie-preview-list.component.html',
  styleUrls: ['./movie-preview-list.component.css']
})
export class MoviePreviewListComponent {
  @Input() movies: Movie[];
}
