import React, { useState } from 'react'
import LoginService from '../services/LoginService';
import "../styles/Login.css";
import { Navigate } from 'react-router';

export const Login = ( { onLogin } ) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({...credentials, [name]: value});
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await LoginService.login(credentials);

            if (response.token !== '') {
                console.log('Login exitoso', response);

                // console.log('TOKEN GUARDADO: ', LoginService.getToken());

                onLogin(true);
                setLoggedIn(true);
            } else {
                console.log('Error en el login');
            }
        } catch (error) {
            console.log('Error al procesar la solicitud: ', error);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/home"/>
    }

    return (
        <div className="login-div">
            <div className="login-card">
                <h2>Inicio de sesión</h2>

                <form onSubmit={ handleLogin }>
                    <p>Nombre de usuario</p>
                    <input type="text" name="username" value={ credentials.username }  onChange={ handleChange } required/>
                    
                    <p>Contraseña</p>
                    <input type="password" name="password" value={ credentials.password }  onChange={ handleChange } required/>

                    <br/>

                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
