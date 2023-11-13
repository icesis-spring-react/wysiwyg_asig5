import React, { useState } from 'react'
import APIRestService from '../services/APIRestService';
import LoginService from '../services/LoginService';

export const DeleteMovie = ( { onMovieDeleted } ) => {
    const [movieID, setMovieID] = useState("");

    const handleChange = (e) => {
        setMovieID(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.deleteMovie(movieID);

            if (response.status === 200) {
                console.log('Película ${movieID} eliminada correctamente');

                setMovieID("");

                onMovieDeleted();
            } else {
                console.error('Error en la eliminación de película ${movieID}');
            }


        } catch (error) {
            console.error('Error en la eliminación', error);
        }
    };
    
    return (
        <div className="container">

            <h2>Eliminar película</h2>

            <div className="card">
                <form onSubmit={ handleDelete }>
                    <p>Ingresa el id de la película que deseas eliminar:</p>
                    <input type="number" name="movieId" value={ movieID } onChange={ handleChange }></input>

                    <br/><br/>

                    <button type="submit">Eliminar</button>
                </form>
            </div>
        </div>
    );
}


export default DeleteMovie;