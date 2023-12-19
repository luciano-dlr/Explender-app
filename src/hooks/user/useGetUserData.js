import UserInfoService from "../../services/user/user.service";
import { useState } from "react";


const userInfoService = new UserInfoService();

const useGetUserData = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const get = async (token) => {

    try {
      setIsLoading(true);

      const response = await userInfoService.getUserInfo(token);
      
      setData(response)
     
    } catch (error) {

      setError(error);

    } finally {

      setIsLoading(false);
      
    }
  };

  return {
    data,
    isLoading,
    error,
    get,
  };
};

export default useGetUserData;
