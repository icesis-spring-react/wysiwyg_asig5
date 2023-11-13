import React from 'react'
import { useState } from 'react';
import RegistrationService from '../services/RegistrationService';
import "../styles/Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        lastname: '',
        firstname: '',
        country: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await RegistrationService.register(formData);

            if (response.status === 200) {
                console.log('Registro exitoso');
                // Puedes redirigir al usuario a otra página o hacer cualquier otra acción después del registro exitoso
            } else {
                console.error('Error en el registro');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
        }
    };

    return (
        <div className="register-div">
            <div className="register-card">
                <h2>Registro de Usuario</h2>
                
                <form onSubmit={ handleSubmit }>
                    <p>Email</p>
                    <input type="email" name="username" value={formData.username} onChange={ handleChange } required/>
                    <br />

                    <p>Contraseña</p>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                    <br />

                    <p>Apellido</p>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required/>
                    <br />

                    <p>Nombre</p>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
                    <br />

                    <p>País</p>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    <br />

                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

