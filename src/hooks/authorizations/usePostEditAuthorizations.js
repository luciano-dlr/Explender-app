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

            const response = await authorizationsEditService.postEditAuthorization(data, token)
            setData(response)

            // console.log('efectivamente funca',response)
            

        } catch (err) {
            setError(err);
            // console.log('error',err)

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