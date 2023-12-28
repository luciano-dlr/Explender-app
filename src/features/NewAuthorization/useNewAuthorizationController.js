// useNewAuthorizationController.js

import React, { useState } from 'react';
import usePostAuthorizations from '../../hooks/authorizations/usePostAddAuthorizations';
import { useAuthStore } from '../../zustand/useAuthStore';
import { useUserStore } from '../../zustand/useUserStore';

export const useNewAuthorizationController = () => {

    const userInfo = useUserStore((bolsa) => bolsa.userInfo);
    const token = useAuthStore((bolsa) => bolsa.userData?.token);

    const { post } = usePostAuthorizations();

    const [isGroupModalVisible, setIsGroupModalVisible] = useState(false);
    const [groupOptions, setGroupOptions] = useState([
        'Grupo 1',
        'Grupo 2',
        'Grupo 3',
        'Grupo 4',
        'Grupo 5',
        'Grupo 6',
        'Grupo 7',
        'Grupo 8',
        'Grupo 9',
        'Grupo 10',
        'Grupo 11',
        'Grupo 12',
        'Grupo 13',
        
    ]);

    const makeDate = () => {
        const date = new Date();
        date.setMonth(date.getMonth());
        const dateOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timeZone: 'America/Argentina/Buenos_Aires',
        };
        const dateFromArg = date.toLocaleDateString('es-AR', dateOptions);
        const parsedDate = dateFromArg.replace(/\//g, '-');
        const dateParts = parsedDate.split('-');
        return dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0];
    };

    const date = makeDate();

    const [newAuthorization, setNewAuthorization] = useState({
        Codigo: '',
        Tipo: '1',
        CodGrupo: '',
        AutorizadoDesde: date,
        AutorizadoHasta: '',
        Autorizado: {
            Codigo: '',
            TipoDoc: '',
            NroDoc: '',
            Nombre: 'Ingresar nombre',
        },
        Dias: [
            {
                Dia: '',
                DesdeHora: '00:00',
                HastaHora: '23:59',
            },
        ],
        Autorizante: userInfo.USUARIO[0].PERSONA.CODIGO,
        codDestino: userInfo.USUARIO[0].DESTINOS[0].CODIGO,
    });

    const handleToggle = () => {
        const newTipo = newAuthorization.Tipo === '1' ? '2' : '1';
        setNewAuthorization({
            ...newAuthorization,
            Tipo: newTipo,
        });
    };

    
    // console.log(JSON.stringify(newAuthorization,null,4))
    // console.log(JSON.stringify(userInfo,null,4))

    const handlePressAuthorization = () => {
        post(data, token);
    };

    return {
        handlePressAuthorization,
        newAuthorization,
        handleToggle,
        isGroupModalVisible,
        setIsGroupModalVisible,
        groupOptions,
        setGroupOptions,
        userInfo
    };
};
