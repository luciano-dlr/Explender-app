
// import AuthService from "../../services/auth/auth.service"
import { useState } from "react"

import infractionsService from "../../services/infractions/infractions.service"
import { useAuthStore } from "../../zustand/useAuthStore"

const usePostInfractionsList = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    
    const infractions = new infractionsService()

    const {token} = useAuthStore()
    
    const post = async (data) => {
        console.log(token)

        try {

            setIsLoading(true)
            console.log('soy el hook');
            const response = await infractions.postInfraction(token,data)
            
            console.log('soy response',response);
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

export default usePostInfractionsList