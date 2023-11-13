package com.example.asignacion_3.controllers;

import com.example.asignacion_3.models.Director;
import com.example.asignacion_3.models.Movie;
import com.example.asignacion_3.services.DirectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
@RestController
@RequestMapping("/directors")
public class DirectorController {

    @Autowired
    private DirectorService directorService;

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @GetMapping("/all")
    public ArrayList<Director> getDirectors() {
        return directorService.getAllDirectors();
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @PostMapping("/add")
    public boolean addDirector(@RequestBody Director director) {
        return directorService.addDirector(director);
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @GetMapping("/{id}")
    public ResponseEntity<Director> findDirector(@PathVariable Long id) {
        Director director = directorService.getDirectorById(id);

        if (director != null) {
            return ResponseEntity.ok(director);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @PutMapping("/update/{id}")
    public ResponseEntity<Boolean> updateDirector(@PathVariable Long id, @RequestBody Director director) {
        if (directorService.updateDirector(id, director)) {
            return ResponseEntity.ok(true);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Boolean> deleteDirector(@PathVariable Long id) {
        if (directorService.removeDirector(id)) {
            return ResponseEntity.ok(true);
        }

        return ResponseEntity.notFound().build();
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:5173")
    @GetMapping("/{id}/movies")
    public ArrayList<Movie> findDirectorMovies(@PathVariable Long id) {
        return directorService.getMoviesByDirectorId(id);
    }
}
