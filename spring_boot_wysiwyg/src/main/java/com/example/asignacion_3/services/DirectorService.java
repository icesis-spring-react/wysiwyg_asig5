package com.example.asignacion_3.services;

import com.example.asignacion_3.models.Director;
import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.asignacion_3.repositories.DirectorRepository;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class DirectorService {

    @Autowired
    private DirectorRepository directorRepository;

    public ArrayList<Director> getAllDirectors() {
        return (ArrayList<Director>) directorRepository.findAll();
    }

    public boolean addDirector(Director director) {
        return directorRepository.save(director) != null;
    }

    public Director getDirectorById(Long directorID) {
        try {
            return directorRepository.findById(directorID).get();
        } catch (Exception e) {
            return null;
        }
    }

    public boolean updateDirector(Long id, Director director) {
        Optional<Director> optionalDirector = directorRepository.findById(id);

        if (optionalDirector.isPresent()) {
            Director updatedDirector = optionalDirector.get();
            updatedDirector = director;

            directorRepository.save(updatedDirector);

            return true;
        } else {
            return false;
        }
    }

    public boolean removeDirector(Long id) {
        directorRepository.deleteById(id);

        return directorRepository.findById(id).isEmpty();
    }
//
//    public ArrayList<Movie> getMoviesByDirectorId(Long id) {
//        return directorRepository.findMoviesByDirectorId(id);
//    }

}
