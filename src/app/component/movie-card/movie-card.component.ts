import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vil-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Object;
  constructor() { }

  ngOnInit() {
  }

}
