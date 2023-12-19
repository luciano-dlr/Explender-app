import axios from "axios";

export default class UserInfo {
  
  async getUserInfo(token) {
    const config = {

      headers: {
        'token': token,
        'Content-Type': 'application/json',
      },
      
    };

    try {
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL + '/Usuarios', config);
     
      return response.data;

    } catch (error) {

      console.error('Axios error:', error);

      throw error;

    }
  }
}
