import { useState } from "react"
import AuthorizationsEditService from "../../services/authorizations/authorizationsEdit.service"

const usePostEditAuthorizations = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const authorizationsEditService = new AuthorizationsEditService()

    const post = async (data, token) => {

        try {

            setIsLoading(true)

            console.log('entro servicio')
            const response = await authorizationsEditService.postEditAuthorization(data, token)
            console.log('soy response', response)

            setData(response)

        } catch (err) {
            setError(error);
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

export default usePostEditAuthorizations