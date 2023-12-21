
import AuthService from "../../services/auth/auth.service"
import { useAuthStore } from "../../zustand/useAuthStore";
import { useState } from "react"

const usePostLogIn = () => {
    
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const authService = new AuthService();

    const post = async (usuario) => {

        try {
            
            setIsLoading(true)
            const response = await authService.postLogin(usuario);
            setData(response)

        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        data,
        isLoading,
        error,
        post
    }

}

export default usePostLogIn