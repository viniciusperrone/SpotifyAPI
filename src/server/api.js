import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/artists/163tK9Wjr9P9DmM0AVK7lm/top-tracks?country=BR"
})

export default api;