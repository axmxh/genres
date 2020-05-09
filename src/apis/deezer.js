import axios from "axios";
/**
 *  if you run the project locally you have to use commented baseURL:
 *  to bypass CORS policy
 *  https://cors-anywhere.herokuapp.com/https://api.deezer.com
 */

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
  //baseURL: 'https://api.deezer.com'
});
