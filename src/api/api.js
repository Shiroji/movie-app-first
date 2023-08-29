import axios from "axios";

const API_KEY = "f36f23edf6e10fd2ddcf939916b1f67a"

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
});


export const FilmsAPI = {
    getGenres(){
       return instance.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    },
    getMovieByPage(pageNumber) {
        return instance.get(`/discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
    },
    getMovie(id) {
        return instance.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    },
    getSearch(text) {
        return instance.get(`/search/movie?api_key=${API_KEY}&query=${text}`)
    }
}