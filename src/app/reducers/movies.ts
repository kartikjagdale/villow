import { createSelector } from 'reselect';
import { Movie } from '../models/movie';
import * as movie from '../actions/movie';

export interface State {
  ids: string[];
  entities: { [id: string]: Movie };
  selectedMovieId: string | null;
};

const initialState: State = {
  ids: [],
  entities: {},
  selectedMovieId: null,
};

export function reducer(state = initialState, action: movie.Actions): State {
  switch (action.type) {
    case movie.ActionTypes.SEARCH_COMPLETE: {
      const movies = action.payload;
      const newMovies = movies.filter(movie =>  !state.entities[movie.id]);
      const newMovieIds = newMovies.map(movie => movie.id);
      const newBookEntities = newMovies.reduce((entities: { [id: string]: Movie }, movie: Movie) => {
        return Object.assign(entities, {
          [movie.id]: movie
        });
      }, {});

      return {
        ids: [ ...state.ids, ...newMovieIds ],
        entities: Object.assign({}, state.entities, newBookEntities),
        selectedMovieId: state.selectedMovieId
      };
    }
    default: {
      return state;
    }
  }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */
export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedMovieId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
