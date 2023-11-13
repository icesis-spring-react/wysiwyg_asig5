import { useState } from "react";
import "../styles/MoviesByDirectorTable.css";

import React from 'react'
import LoginService from "../services/LoginService";
import APIRestService from "../services/APIRestService";

export const MoviesByDirectorTable = () => {
    const [directorID, setDirectorId] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);

        return date.toLocaleDateString();
    };

    const handleChangeId = (e) => {
        setDirectorId(e.target.value);
    };

    const handleFilter = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.getMoviesByDirector(directorID);

            if (response.status === 200) {
                console.log('Filtro hecho');

                setDirectorId("");
                setFilteredMovies(response.data);                
            } else {
                console.error('Errror en el filtrado');
                setFilteredMovies([]);
            }
        } catch (error) {
            console.error('Errror en el filtrado: ', error);
        }
    };

    return (
        <div className="container">
            <h1>Películas por director</h1>

            <form onSubmit={ handleFilter }>
                <p>Ingresa el id del director que deseas:</p>
                <input type="text" name="filtered-director-id" value={ directorID } onChange={ handleChangeId } required></input>

                <br/><br/>

                <button type="submit">Filtrar</button>

            </form>

            {filteredMovies.length > 0 && (
                <div>
                    <h3>Películas por director</h3>

                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Género</th>
                                <th>ID del director</th>
                                <th>Fecha de lanzamiento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredMovies.map((movie) => {
                                    return (
                                        <tr key={ movie.id }>
                                            <td>{ movie.id }</td>
                                            <td>{ movie.name }</td>
                                            <td>{ movie.genre }</td>
                                            <td>{ movie.directorId }</td>
                                            <td>{ formatDate(movie.releaseDate) }</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MoviesByDirectorTable;
