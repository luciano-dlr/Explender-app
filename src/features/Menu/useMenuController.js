import { useAuthStore } from "../../zustand/useAuthStore"
import { useAuthorizationsStore } from "../../zustand/useAuthorizationsStore"
import { useUserStore } from "../../zustand/useUserStore"


export const useMenuController = () => {


    const { setUserData } = useAuthStore()
    const { setUserInfo } = useUserStore()
    const { setUserAuthorizationsList } = useAuthorizationsStore()

    const handleLogOut = () => {
        setUserAuthorizationsList(null)
        setUserData(null)
        setUserInfo(null)
      }

  return {
    handleLogOut
  }
}

