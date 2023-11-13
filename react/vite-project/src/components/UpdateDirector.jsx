import React, { useState } from 'react'
import LoginService from '../services/LoginService';
import APIRestService from '../services/APIRestService';

export const UpdateDirector = ( { onDirectorUpdated } ) => {
    const [directorID, setDirectorID] = useState("");
    const [updatedData, setUpdatedData] = useState({
        name: "",
    });

    const handleChangeId = (e) => {
        setDirectorID(e.target.value);
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
            
            const response = await APIRestService.updateDirector(directorID, updatedData);

            if (response.status === 200) {
                console.log('Actualización efectiva');

                setDirectorID('');

                setUpdatedData({
                    name: '',
                });

                onDirectorUpdated();
            } else {
                console.error('Error en la actualización');
            }

        } catch (error) {
            console.error('Error en la actualización: ', error);
        }
    };

    return (
        <div className="container">

            <h2>Actualizar director</h2>

            <div className="card">
                <form onSubmit={ handleUpdate }>
                    <p>Ingresa el id del director que deseas actualizar</p>
                    <input type="text" name="directorId" value={ directorID } onChange={ handleChangeId } required></input>

                    <p>Ingresa el nuevo nombre del director</p>
                    <input type="text" name="name" value={ updatedData.name } onChange={ handleChangeData } required></input>

                    <br/><br/>

                    <button type="submit">Actualizar</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateDirector;