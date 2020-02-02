import { combineReducers } from 'redux';
import genreReducer from './genreReducer';
import artistReducer from './artistReducer';

export default combineReducers({
  genres: genreReducer,
  artists: artistReducer
});
