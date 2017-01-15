export interface Movie {
  id:             string;
  title:          string;
  poster_path:    string;
  adult:          boolean;
  overview:       string;
  release_date:   string;
  genere_ids:     Array<number>;
  original_title: string;
  backdrop_path:  string;
  popularity:     number;
  vote_count:     number;
  video:          boolean;
  vote_average:   number;
}
