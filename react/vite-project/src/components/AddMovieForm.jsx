import { useState } from "react";
import APIRestService from "../services/APIRestService";
import React from 'react'
import "../styles/AddMovieForm.css";
import LoginService from "../services/LoginService";

export const AddMovieForm = ( { onMovieCreated } ) => {
    const [movieData, setMovieData] = useState({
        name: '',
        genre: '',
        directorId: '',
        releaseDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setMovieData({
            ...movieData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();
            
            const response = await APIRestService.addMovie(movieData);

            if (response.status === 200) {
                console.log('Registro exitoso');

                // Clears the inputs
                setMovieData({
                    name: '',
                    genre: '',
                    directorId: '',
                    releaseDate: '',
                });

                onMovieCreated();
            } else {
                console.error('Error en la creación de película');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud: ', error);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Agregar película</h2>

                <form onSubmit={ handleSubmit }>
                    <p>Ingrese el nombre de la película</p>
                    <input type="text" name="name" value={ movieData.name } onChange={ handleChange } required></input>

                    <p>Ingrese el género de la película</p>
                    <input type="text" name="genre" value={ movieData.genre } onChange={ handleChange } ></input>
                    
                    <p>Ingrese el número de identificación del director de la película</p>
                    <input type="number" name="directorId" value={ movieData.directorId } onChange={ handleChange } ></input>
                    
                    <p>Ingrese la fecha de la película</p>
                    <input type="date" name="releaseDate" value={ movieData.releaseDate } onChange={ handleChange } ></input>
                    
                    <br/><br/>

                    <input type="submit" value="Agregar"></input>
                </form>
            </div>
        </div>
    );
}


export default AddMovieForm;