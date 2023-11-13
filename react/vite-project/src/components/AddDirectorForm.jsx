import APIRestService from '../services/APIRestService';
import LoginService from '../services/LoginService';
import '../styles/AddDirectorForm.css'
import React, { useState } from 'react'

// function AddDirectorForm(props) {
//     const directors = props.directors;

//     function isDirector(directorID) {
//         return directors.find(director => director.id === directorID);
//     }  

//     function addDirector(event) {
//         event.preventDefault();
        
//         const directorId = event.target.directorID.value;
//         const directorName = event.target.directorName.value;
    
//         if (isDirector(directorId)) {
//           const updatedDirectors = directors.map(director => 
//             director.id === directorId ? { ...director, name: directorName } : director
//           );
    
//           props.setDirectors(updatedDirectors);
    
//         } else {
//           const director = {
//             id: directorId,
//             name: directorName
//           };
      
//           props.setDirectors([director, ...directors]);
//         }
    
//         event.target.directorID.value = '';
//         event.target.directorName.value = '';
//     }

//     return (
//         <div className="container">
//             <div className="card">
//                 <h2>Agregar director</h2>

//                 <form onSubmit={ addDirector }>
//                     <p>Ingrese el número de identificación del director</p>
//                     <input type="text" id="directorID"></input>

//                     <p>Ingrese el nombre del director</p>
//                     <input type="text" id="directorName"></input>
                    
//                     <br/>
//                     <br/>

//                     <input type="submit" value="Agregar"></input>
//                 </form>
//             </div>
//         </div>
//     );
// }


export const AddDirectorForm = ( { onDirectorCreated } ) => {
    const [directorData, setDirectorData] = useState({
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setDirectorData({
            ...directorData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            LoginService.setAuthHeader();

            const response = await APIRestService.addDirector(directorData);

            if (response.status === 200) {
                console.log('Registro de director exitoso');

                setDirectorData({
                    name: '',
                });

                onDirectorCreated();
            } else {
                console.error('Error en la creación del director');
            }
        } catch (error) {
            console.error('Error en la creación del director: ', error);
        }
    };

    return (
        <div className="container">
            <h2>Agregar director</h2>

            <div className="card">
                <form onSubmit={ handleSubmit }>
                    <p>Ingrese el nombre del director</p>
                    <input type="text" name="name" value={ directorData.name } onChange={ handleChange } required></input>

                    <br/><br/>

                    <button type="Submit">Crear</button>
                </form>
            </div>
        </div>
    );
}


export default AddDirectorForm;