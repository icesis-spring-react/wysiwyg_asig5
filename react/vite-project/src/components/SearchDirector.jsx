import React, { useState } from 'react'
import LoginService from '../services/LoginService';
import APIRestService from '../services/APIRestService';

export const SearchDirector = () => {
    const [directorID, setDirectorID] = useState("");
    const [foundDirector, setFoundDirector] = useState(null);
    const [notfoundDirector, setNotFoundDirector] = useState(false);

    const handleChange = (e) => {
        setDirectorID(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.getDirectorBy(directorID);

            if (response.status === 200) {
                console.log('Búsqueda efectiva');

                setFoundDirector(response.data);
                setNotFoundDirector(false);

                setDirectorID("");
            } else {
                console.error('Director no encontrado');

                setFoundDirector(null);
                setNotFoundDirector(true);
            }
        } catch (error) {
            console.error('Error en la búsqueda: ', error);

            if (error.response.status === 404) {
                setFoundDirector(null);
                setNotFoundDirector(true);
            }
        }
    };

    return (
        <div className="container">
            <h2>Buscar director por ID</h2>

            <div className="card">
                <form onSubmit={ handleSearch }>
                    <p>Ingresa el ID del director</p>
                    <input type="number" name="directorId" value={ directorID } onChange={ handleChange } required></input>

                    <br/><br/>

                    <button type="submit">Buscar</button>
                </form>

                {notfoundDirector && (
                    <div>
                        <h3>Director no encontrado</h3>
                    </div>
                )}

                {foundDirector && !notfoundDirector && (
                    <div>
                        <h3>Director encontrado</h3>

                        <p>ID: {foundDirector.id}</p>
                        <p>Nombre: {foundDirector.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}


export default SearchDirector;