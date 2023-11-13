package com.example.asignacion_3.repositories;

import com.example.asignacion_3.models.Director;
import com.example.asignacion_3.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

@Repository
public class DirectorRepository {

    private static ArrayList<Director> directors = new ArrayList<>();

    @Autowired
    private MovieRepository movies;

    public List<Director> findAll() {
        return directors;
    }

    public boolean save(Director director) {
        director.setId(directors.isEmpty() ? 1 : directors.get(directors.size() - 1).getId() + 1);

        return directors.add(director);
    }

    public Director findBy(Long directorID) {
        return directors.stream().filter(director -> director.getId() == directorID).findFirst().orElse(null);
    }

    public boolean update(Long id, Director director) {
        Director aux = findBy(id);

        if (aux != null) {
            aux.setName(director.getName());

            return true;
        }

        return false;
    }

    public boolean deleteById(Long id) {
        return directors.remove(findBy(id));
    }

    public ArrayList<Movie> findMoviesByDirectorId(Long id) {
        return (ArrayList<Movie>) movies.findAll().stream().filter(movie -> movie.getDirectorId() == id).collect(Collectors.toList());
    }
}
