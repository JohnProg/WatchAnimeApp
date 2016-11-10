const API_KEY = 'AIzaSyBwwLUyEEYHGVsNI7QUskJx0aK2U5isnxQ';
const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3'

export default class Api {
  static search(query) {
    let url = `${youtubeApiBaseUrl}/search?part=snippet&type=video&maxResults=50&q=${query}&key=${API_KEY}`;

    return fetch(url)
    .then(response => response.json())
    .then(json     => json)
    .catch(error   => console.warn(error));
  }
}
