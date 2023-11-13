import React from 'react'
import { useState } from 'react';
import APIRestService from '../services/APIRestService';
import LoginService from '../services/LoginService';

export const UpdateMovie = ( { onMovieUpdated } ) => {
    const [movieID, setMovieID] = useState("");
    const [updatedData, setUpdatedData] = useState({
        name: "",
        genre: "",
        directorID: "",
        releaseDate: "",
    });

    const handleChangeId = (e) => {
        setMovieID(e.target.value);
    };

    const handleChangeData = (e) => {
        const { name, value } = e.target;

        setUpdatedData({
            ...updatedData,
            [name]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.updateMovie(movieID, updatedData);

            if (response.status === 200) {
                console.log('Película ${movieID} actualizada correctamente');

                setMovieID("");

                setUpdatedData({
                    name: "",
                    genre: "",
                    directorID: "",
                    releaseDate: "",
                });

                onMovieUpdated();
            } else {
                console.error('Error en la actualización de película ${movieID}');
            }


        } catch (error) {
            console.error('Error en la actualización', error);
        }
    };
    
    return (
        <div className="container">

            <h2>Actualizar película</h2>

            <div className="card">
                <form onSubmit={ handleUpdate }>
                    <p>Ingresa el id de la película que deseas actualizar:</p>
                    <input type="number" name="movieId" value={ movieID } onChange={ handleChangeId }></input>
                    
                    <p>Ingrese el nuevo nombre de la película</p>
                    <input type="text" name="name" value={ updatedData.name } onChange={ handleChangeData } required></input>

                    <p>Ingrese el nuevo género de la película</p>
                    <input type="text" name="genre" value={ updatedData.genre } onChange={ handleChangeData } required></input>
                    
                    <p>Ingrese el nuevo número de identificación del director de la película</p>
                    <input type="number" name="directorID" value={ updatedData.directorID } onChange={ handleChangeData } required></input>
                    
                    <p>Ingrese la nueva fecha de la película</p>
                    <input type="date" name="releaseDate" value={ updatedData.releaseDate } onChange={ handleChangeData } required></input>

                    <br/><br/>

                    <button type="submit">Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateMovie;
