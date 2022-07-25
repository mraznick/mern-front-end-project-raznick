import axios from 'axios';

let apiUrl;

const apiUrls = {
  development: "http://localhost:4000/pizza-api"
  //this might need to be fixed?? ^^
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl,
})

export default api;