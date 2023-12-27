import { View, Text } from 'react-native'
import React, { useState } from 'react'
import usePostAuthorizations from '../../hooks/authorizations/usePostAddAuthorizations'
import { useAuthStore } from '../../zustand/useAuthStore';
import { useUserStore } from '../../zustand/useUserStore';

export const useNewAuthorizationController = () => {



    const userInfo = useUserStore((bolsa) => bolsa.userInfo);
    const token = useAuthStore((bolsa) => bolsa.userData?.token);
    const { post } = usePostAuthorizations()

    //Codigo usuario
    //    console.log(JSON.stringify(userInfo.USUARIO[0].PERSONA.CODIGO,null,4))

    //CodDestino Ubicacion del usuario
    // console.log(JSON.stringify(userInfo.USUARIO[0].DESTINOS[0].CODIGO, null, 4))

    const makeDate = () => {
        const date = new Date();
        date.setMonth(date.getMonth());
        const dateOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'America/Argentina/Buenos_Aires' // Especificar la zona horaria de Argentina
        };

        const dateFromArg = date.toLocaleDateString('es-AR', dateOptions);

        const parsedDate = dateFromArg.replace(/\//g, '-');
        const dateParts = parsedDate.split('-');
        return dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
    }



    const date = makeDate();


    const [newAuthorization, setNewAuthorization] = useState(
        {
            Codigo: '',
            Tipo: '',
            CodGrupo: '',
            AutorizadoDesde: date,
            AutorizadoHasta: '',
            Autorizado: {
                Codigo: '',
                TipoDoc: '',
                NroDoc: '',
                Nombre: ''
            },
            Dias: [
                {

                }
            ],
            Autorizante: userInfo.USUARIO[0].PERSONA.CODIGO,
            codDestino: userInfo.USUARIO[0].DESTINOS[0].CODIGO
        }
    )
    


    const handlePressAuthorization = () => {
        const data = {
            "Codigo": "",
            "Tipo": "2",
            "codGrupo": "_3P10MV6KO",
            "AutorizadoDesde": "2023-12-21",
            "AutorizadoHasta": "2023-12-21",
            "Autorizado": {
                "Codigo": "",
                "TipoDoc": "",
                "NroDoc": "0",
                "Nombre": "leonardo3"
            },
            "Dias": [
                {
                    "Dia": "",
                    "DesdeHora": "21:51",
                    "HastaHora": "23:59"
                }
            ],
            "Autorizante": "_5SR13NAMU",
            "codDestino": "TestLC"
        }

        post(data, token)

    }


    return (
        handlePressAuthorization,
        newAuthorization
    )
}

