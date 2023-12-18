

import UserInfoService from "../../services/user/user.service";
import { useState } from "react";
import { useUserStore } from "../../zustand/useUserStore";


const userInfoService = new UserInfoService();

const useUserDataGet = () => {
  const userStore = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async (token) => {
    try {
      setIsLoading(true);

      console.log('Calling getUserInfo with token:', token);

      const response = await userInfoService.getUserInfo(token);

      console.log('getUserInfo response:', response);

      // guardado en el store
      userStore.setUserInfo(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    get,
  };
};

export default useUserDataGet;
