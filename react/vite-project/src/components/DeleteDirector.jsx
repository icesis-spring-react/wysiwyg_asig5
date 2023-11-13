import React, { useState } from 'react'
import LoginService from '../services/LoginService';
import APIRestService from '../services/APIRestService';

export const DeleteDirector = ( { onDirectorDeleted } ) => {
    const [directorID, setDirectorID] = useState("");

    const handleChange = (e) => {
        setDirectorID(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.deleteDirector(directorID);

            if (response.status === 200) {
                console.log('Eliminación efectiva');

                setDirectorID("");

                onDirectorDeleted();
            } else {
                console.error('Error en la eliminación', response);
            }

        } catch (error) {
            console.error('Error en la eliminación: ', error);
        }
    };

    return (
        <div className="container">
            <h2>Eliminar director</h2>
            

            <div className="card">
                <form onSubmit={ handleDelete }>
                    <p>Ingresa el id del director que deseas eliminar</p>
                    <input type="text" name="directorId" value={ directorID } onChange={ handleChange } required></input>

                    <br/><br/>

                    <button type="submit">Eliminar</button>
                </form>
            </div>
        </div>
    );
}
