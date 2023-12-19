import axios from "axios";

export default class AuthorizationsService {
    async postAuthorization(data, token) {
        
        const headers = {
            'Content-Type': 'application/json',
            'token': token,
        };

        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Autorizacion', data, { headers });
        return response.data;
    }
}
