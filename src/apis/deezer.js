import axios from 'axios';
//https://cors-anywhere.herokuapp.com/
export default axios.create({
  baseURL: 'https://api.deezer.com'
});
