package com.example.asignacion_3.services;


import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.asignacion_3.repositories.MovieRepository;

import java.util.ArrayList;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public ArrayList<Movie> getAllMovies() {
        return (ArrayList<Movie>) movieRepository.findAll();
    }

    public boolean addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie getMovieById(Long movieID) {
        return movieRepository.findBy(movieID);
    }

    public boolean updateMovie(Long movieID, Movie movie) {
        return movieRepository.update(movieID, movie);
    }

    public boolean removeMovie(Long id) {
        return movieRepository.deleteById(id);
    }

}
