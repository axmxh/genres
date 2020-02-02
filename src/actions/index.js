import { FETCH_GENRES, FETCH_ARTISTS, CLEAR_ARTISTS } from './types';
import deezer from '../apis/deezer';

export const fetchGenres = () => async dispatch => {
  const response = await deezer.get('/genre');

  dispatch({ type: FETCH_GENRES, payload: response.data.data });
};

export const fetchArtists = id => async dispatch => {
  const response = await deezer.get(`/genre/${id}/artists`);

  dispatch({ type: FETCH_ARTISTS, payload: response.data.data });
};

export const clearArtists = () => {
  return {
    type: CLEAR_ARTISTS
  };
};
