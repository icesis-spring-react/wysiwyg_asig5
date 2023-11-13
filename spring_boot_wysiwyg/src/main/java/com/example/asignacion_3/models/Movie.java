package com.example.asignacion_3.models;

import jakarta.persistence.*;
import java.util.Date;


public class Movie {

    private long id;
    private String name;
    private String genre;
    private long directorId;
    private Date releaseDate;

    public Movie() {

    }

    public Movie(String name, String genre, long directorId, Date releaseDate) {
        this.name = name;
        this.genre = genre;
        this.directorId = directorId;
        this.releaseDate = releaseDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public long getDirectorId() {
        return directorId;
    }

    public void setDirectorId(long directorId) {
        this.directorId = directorId;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }
}
