import axios from "axios";

const BASE_MOVIE_API_REST_URL = "http://localhost:8080/movies";
const BASE_DIRECTORS_API_REST_URL = "http://localhost:8080/directors";

class APIRestService {

    // ----- MOVIES METHODS -----

    getAllMovies() {
        const url = `${BASE_MOVIE_API_REST_URL}/all`;

        return axios.get(url);
    }

    addMovie(movieData) {
        const url = `${BASE_MOVIE_API_REST_URL}/add`;

        return axios.post(url, movieData);
    }

    deleteMovie(movieID) {
        const url = `${BASE_MOVIE_API_REST_URL}/delete/${movieID}`;
        
        return axios.delete(url);
    }

    updateMovie(movieID, updatedData) {
        const url = `${BASE_MOVIE_API_REST_URL}/update/${movieID}`;

        return axios.put(url, updatedData);
    }

    getMovieBy(movieID) {
        const url = `${BASE_MOVIE_API_REST_URL}/${movieID}`;

        return axios.get(url);
    }


    // ----- DIRECTORS METHODS -----

    getAllDirectors() {
        const url = `${BASE_DIRECTORS_API_REST_URL}/all`;

        return axios.get(url);
    }

    addDirector(directorData) {
        const url = `${BASE_DIRECTORS_API_REST_URL}/add`;

        return axios.post(url, directorData);
    }

    deleteDirector(directorID) {
        const url = `${BASE_DIRECTORS_API_REST_URL}/delete/${directorID}`;
        
        console.log(url)

        return axios.delete(url);
    }

    updateDirector(directorID, updatedData) {
        const url = `${BASE_DIRECTORS_API_REST_URL}/update/${directorID}`;

        return axios.put(url, updatedData);
    }

    getDirectorBy(directorID) {
        const url = `${BASE_DIRECTORS_API_REST_URL}/${directorID}`;

        return axios.get(url);
    }

    getMoviesByDirector(directorID) {
        const url = `${BASE_DIRECTORS_API_REST_URL}/${directorID}/movies`;
        
        return axios.get(url);
    }
}

export default new APIRestService();