import axios from 'axios';

const LOGIN_API_REST_URL = 'http://localhost:8080/auth/login';

class LoginService {
    async login(credentials) {
        try {
            const response = await axios.post(LOGIN_API_REST_URL, credentials);
            if (response.data.token) {
                // Almacena el token en el almacenamiento local (puedes usar sessionStorage o localStorage según tus necesidades)
                this.logout();
                localStorage.setItem('token', response.data.token);
            }
            
            return response.data;
        } catch (error) {
            throw error;
        }
    }
  
    logout() {
        // Elimina el token del almacenamiento local al cerrar sesión
        localStorage.removeItem('token');
    }
  
    getToken() {
        // Obtiene el token del almacenamiento local
        return localStorage.getItem('token');
    }

    setAuthHeader() {
        // Configura la cabecera de autorización con el token
        // axios.defaults.headers.common['Authorization'] = `Bearer ${this.getToken()}`;

        const token = this.getToken();

        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
    
    removeAuthHeader() {
        // Elimina la cabecera de autorización
        delete axios.defaults.headers.common['Authorization'];
    }
  }
  
  export default new LoginService();