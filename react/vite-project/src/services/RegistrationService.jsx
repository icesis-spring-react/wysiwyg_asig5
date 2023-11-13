import axios from "axios";

const REGISTRATION_API_REST_URL = "http://localhost:8080/auth/register";

class RegistrationService {
    register(userData) {
        return axios.post(REGISTRATION_API_REST_URL, userData);
    }
}

export default new RegistrationService();