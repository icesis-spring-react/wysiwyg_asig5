package com.example.asignacion_3.controllers;

import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.asignacion_3.services.MovieService;

import java.util.ArrayList;

@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieServices;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/all")
    public ArrayList<Movie> getMovies() {
        return movieServices.getAllMovies();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/add")
    public boolean addMovie(@RequestBody Movie movie) {
        return movieServices.addMovie(movie);
    }


    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Movie> findMovie(@PathVariable Long id) {
        Movie movie = movieServices.getMovieById(id);

        if (movie != null) {
            return ResponseEntity.ok(movie);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/update/{id}")
    public ResponseEntity<Boolean> updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
        if (movieServices.updateMovie(id, movie)) {
            return ResponseEntity.ok(true);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteMovie(@PathVariable Long id) {
        if (movieServices.removeMovie(id)) {
            return ResponseEntity.ok(true);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/error")
    public String error() {
        return "Fucking error";
    }

}
