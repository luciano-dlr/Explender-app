import { useEffect, useState } from 'react';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostLogIn from '../../hooks/auth/usePostLogIn';
import { useUserStore } from '../../zustand/useUserStore';
import { useAuthorizationsController } from '../Authorizations/useAuthorizationsController';

export const useLoginController = () => {

    const authStore = useAuthStore();
    // const userStore = useUserStore()

    

    const { data, error, isLoading, post } = usePostLogIn();

    const [dni, setDni] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    
    const handleLogin = () => {

        const usuarioObject = {
            TipoDoc: 'DNI',
            NroDoc: dni,
            Usuario: usuario,
            Pass: contrasena,
            CodApp: 0
        };

        post(usuarioObject)

    };

    useEffect(() => {
        
        
        
        if (data) {
            authStore.setUserData(data)
           
        }
        
    }, [data])
    
    // useEffect(() => {
    //     //si existe data funca handle
    //     if (data) {
    //         handleUserInfo();
    //     }
    // }, [data]);

    return {
        handleLogin,
        dni,
        usuario,
        contrasena,
        setDni,
        setUsuario,
        setContrasena,
        isLoading
    }

}