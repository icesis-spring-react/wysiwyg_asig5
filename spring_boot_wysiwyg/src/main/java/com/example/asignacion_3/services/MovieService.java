package com.example.asignacion_3.services;


import com.example.asignacion_3.models.Director;
import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.asignacion_3.repositories.MovieRepository;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public ArrayList<Movie> getAllMovies() {
        return (ArrayList<Movie>) movieRepository.findAll();
    }

    public boolean addMovie(Movie movie) {
        return movieRepository.save(movie) != null;
    }

    public Movie getMovieById(Long movieID) {
        try {
            return movieRepository.findById(movieID).get();
        } catch (Exception e) {
            return null;
        }
    }

    public boolean updateMovie(Long movieID, Movie movie) {
        Optional<Movie> optionalMovie = movieRepository.findById(movieID);

        if (optionalMovie.isPresent()) {
            Movie updatedMovie = optionalMovie.get();
            updatedMovie = movie;

            movieRepository.save(updatedMovie);

            return true;
        } else {
            return false;
        }
    }

    public boolean removeMovie(Long id) {
        movieRepository.deleteById(id);

        return movieRepository.findById(id).isEmpty();
    }

    public ArrayList<Movie> getMoviesByDirectorId(Long id) {
        return movieRepository.findMoviesByDirectorId(id);
    }


}
