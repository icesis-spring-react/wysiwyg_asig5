import React, { useState } from 'react'
import LoginService from '../services/LoginService';
import APIRestService from '../services/APIRestService';

export const SearchMovie = () => {
    const [movieID, setMovieID] = useState("");
    const [foundMovie, setFoundMovie] = useState(null);
    const [notFoundMovie, setNotFoundMovie] = useState(false);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);

        return date.toLocaleDateString();
    };

    const handleChange = (e) => {
        setMovieID(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.getMovieBy(movieID);

            if (response.status === 200) {
                console.log('Búsqueda efectiva');

                setFoundMovie(response.data);
                setNotFoundMovie(false);

                setMovieID("");
            } else {
                console.error('Película con id ${movieID} no encontrada');
                
                setFoundMovie(null);
                setNotFoundMovie(true);
            }

        } catch (error) {
            console.error('Error en la búsqueda: ', error);

            if (error.response.status === 404) {
                setFoundMovie(null);
                setNotFoundMovie(true);
            }
        }
    };

    return (
        <div className="container">
            <h2>Buscar película por ID</h2>

            <div className="card">
                <form onSubmit={ handleSearch }>
                    <p>Ingrese el ID de la película</p>
                    <input type="number" name="movieId" value={ movieID } onChange={ handleChange } required></input>

                    <button type="submit">Buscar</button>
                </form>

                {notFoundMovie && (
                    <div>
                        <h3>Película no encontrada</h3>
                    </div>
                )}

                {foundMovie && !notFoundMovie && (
                    <div>
                        <h3>Película encontrada</h3>

                        <p>ID: {foundMovie.id}</p>
                        <p>Nombre: {foundMovie.name}</p>
                        <p>Género: {foundMovie.genre}</p>
                        <p>ID del director: {foundMovie.directorID}</p>
                        <p>Fecha de estreno: {formatDate(foundMovie.releaseDate)}</p>
                    </div>
                )}
            </div>
        </div>
    );

}

export default SearchMovie;
