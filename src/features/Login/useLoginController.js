import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../zustand/useAuthStore';
import usePostLogIn from '../../hooks/auth/usePostLogIn';



export const useLoginController = () => {

    const navigation = useNavigation();
    const authStore = useAuthStore();

    console.log('zustand',authStore.userData)


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
        authStore.setUserData(data)
    }, [data])

    console.log('soy userData',authStore.userData)

    return {
        handleLogin,
        dni,
        usuario,
        contrasena,
        setDni,
        setUsuario,
        setContrasena,
        data,
        isLoading
    }

}