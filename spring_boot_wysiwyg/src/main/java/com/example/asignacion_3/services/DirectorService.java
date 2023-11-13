package com.example.asignacion_3.services;

import com.example.asignacion_3.models.Director;
import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.asignacion_3.repositories.DirectorRepository;

import java.util.ArrayList;

@Service
public class DirectorService {

    @Autowired
    private DirectorRepository directorRepository;

    public ArrayList<Director> getAllDirectors() {
        return (ArrayList<Director>) directorRepository.findAll();
    }

    public boolean addDirector(Director director) {
        return directorRepository.save(director);
    }

    public Director getDirectorById(Long directorID) {
        return directorRepository.findBy(directorID);
    }

    public boolean updateDirector(Long id, Director director) {
        return directorRepository.update(id, director);
    }

    public boolean removeDirector(Long id) {
        return directorRepository.deleteById(id);
    }

    public ArrayList<Movie> getMoviesByDirectorId(Long id) {
        return directorRepository.findMoviesByDirectorId(id);
    }

}
