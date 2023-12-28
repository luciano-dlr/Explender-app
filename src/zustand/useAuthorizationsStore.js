import { create } from 'zustand';

export const useAuthorizationsStore = create((set) => ({
  userAuthorizationsList: null,
  selectedUserAuthorization: null,
  
  setSelectedUserAuthorization: (data)=> set({selectedUserAuthorization:data}),
  
  setUserAuthorizationsList: (data) => set({ userAuthorizationsList: data }),
  //Funcion para modificar los dias de cualquier authorizacion del listado de authorizaciones
  setUserAuthorizationDays: (data, code) =>set((state)=> {
    // console.log('soy state',state);
    const newAuthorizationList = state.userAuthorizationsList.AUTORIZACIONES.map((item) => {

      if(item.CODIGO === code ){

        return {...item,DIAS:data}
      }
      return item
      
    })
    return newAuthorizationList
  }) 
  
}));