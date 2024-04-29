import axios from "axios";


export default class EntriesService {

    async getEntriesList(data, token) {
        const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + '/Movimiento', data, {
            headers:{
                "token": token,
            }
        });
        return response.data;
    }

}