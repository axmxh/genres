import { FETCH_ARTISTS, CLEAR_ARTISTS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return [...action.payload];
    case CLEAR_ARTISTS:
      return [];
    default:
      return state;
  }
};
