import { createSelector } from 'reselect';
import * as movie from '../actions/movie';

export interface State {
  ids: string[];
  loading: boolean;
  query: string;
};

const initialState: State = {
  ids: [],
  loading: false,
  query: ''
};

export function reducer(state = initialState, action: movie.Actions): State {
  switch (action.type) {
    case movie.ActionTypes.SEARCH: {
      const query = action.payload;
      if (query === '') {
        return {
          ids: [],
          loading: false,
          query
        };
      }

      return Object.assign({}, state, {
        query,
        loading: true
      });
    }

    case movie.ActionTypes.SEARCH_COMPLETE: {
      const movies = action.payload;

      return {
        ids: movies.map(movie => movie.id),
        loading: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}


export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
