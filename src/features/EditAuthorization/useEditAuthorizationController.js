import { useUserStore } from '../../zustand/useUserStore';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostEditAuthorizations from '../../hooks/authorizations/usePostEditAuthorizations';
import { useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useAuthorizationsStore } from '../../zustand/useAuthorizationsStore';

export const useEditAuthorizationController = () => {

  const token = useAuthStore((bolsa) => bolsa.userData?.token);
  const setUserAuthorizationDays = useAuthorizationsStore((bolsa)=> bolsa.setUserAuthorizationDays)
  const selectedUserAuthorization = useAuthorizationsStore((bolsa)=> bolsa.selectedUserAuthorization)
  const setSelectedUserAuthorization = useAuthorizationsStore((bolsa)=> bolsa.setSelectedUserAuthorization)
  
 
 
  
  // console.log(JSON.stringify(authorization,null,4))

  const { post,data } = usePostEditAuthorizations()

  // const [authorizationEdit, setAuthorizationEdit] = useState(authorization)

  // const handleUseEditAuthorization = (field, value) => {

  //   setAuthorizationEdit((prevAuthorization) => {

  //     const newAuthorization = { ...prevAuthorization };
  //     return newAuthorization;

  //   });
  // };


  const [days,setDays] = useState(selectedUserAuthorization.DIAS)

  // console.log('soy dias',JSON.stringify(days,null,4))

  //MiniPeka Aniaaa
  const handleChangeDays = (day,value,context) => {

    setDays((prevState) => {

      const newState = prevState.map((item)=>{
        
          if(item.DIA === day)
          {
            if(context === 'from'){
              const newItem = {...item, DESDEHORA:value}

              return newItem

            }else{
              const newItem = {...item, HASTAHORA:value}

              return newItem

            }
          }
          return item
      })

      return newState
      
    } )
  }


  const handlePressSaveAuthorization = () => {

    //Preguntar a choski para hacer el modal de guardar correctamente o ocurrio un error en el guardado
    post({ ...selectedUserAuthorization, DIAS:days }, token)

  }

  useEffect(() => {
    
    if(data){
      setUserAuthorizationDays(days,selectedUserAuthorization.CODIGO)
      setSelectedUserAuthorization({ ...selectedUserAuthorization, DIAS:days })
      // console.log('soy user Authorization',selectedUserAuthorization);
    }
    
  }, [data])
  



  // const handleEditPostAuthorization = async () => {

  //   post(authorizationEdit, token)

  // };



  return {
    handleChangeDays,
    days,
    handlePressSaveAuthorization,
    selectedUserAuthorization
  };
};