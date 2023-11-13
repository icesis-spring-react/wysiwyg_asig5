package com.example.asignacion_3.models;

import jakarta.persistence.*;

public class Director {

    private long id;
    private String name;

    public Director() {
    }

    public Director(String name) {
        this.name = name;
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
}
