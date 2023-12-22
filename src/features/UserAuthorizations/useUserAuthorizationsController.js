import { useEffect, useState } from "react";
import useGetUserData from "../../hooks/user/useGetUserData";
import { useUserStore } from "../../zustand/useUserStore";
import { useAuthStore } from "../../zustand/useAuthStore";
import usePostAuthorizations from "../../hooks/authorizations/usePostAuthorizations";
import { useAuthorizationsStore } from "../../zustand/useAuthorizationsStore";
import { useNavigation } from "@react-navigation/native";

export const useUserAuthorizationsController = () => {

    const token = useAuthStore((bolsa) => bolsa.userData?.token);
    const setUserInfo = useUserStore((bolsa) => bolsa.setUserInfo);
    const userInfo = useUserStore((bolsa) => bolsa.userInfo);

    // console.log(JSON.stringify(userInfo,null,4))

    const { userAuthorizationsList, setUserAuthorizationsList } = useAuthorizationsStore();
    const { get, data } = useGetUserData()
    const { post, dataAuthorizations } = usePostAuthorizations()
    const { navigate } = useNavigation();

    // const handlePressAuthorization = (nameAuthorized,contentAuthorized) => {

    //   navigate('Authorization',{name:nameAuthorized,content:contentAuthorized});

    // };

    const handlePressAuthorization = (nameAuthorized, authorization) => {
        navigate('Authorization', { name: nameAuthorized, authorization });
    };

    const handleUserInfo = () => {

        get(token);
    };

    const makeDate = () => {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
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

    // console.log('soy yo',userInfo.USUARIO[0].PERSONA.CODIGO)
    // console.log('soy yo',token)

    const handleAuthorizationsList = async () => {
        const date = makeDate();
        const data = {
            Codigo: "",
            Autorizante: userInfo.USUARIO[0].PERSONA.CODIGO,
            AutorizadoHasta: date + " 00:00",
            FillInclNoVigente: false,
            Vigente: "2"
        }
        post(data, token);
    };


    useEffect(() => {

        handleUserInfo()

    }, [])

    useEffect(() => {

        if (data) {
            setUserInfo(data)
        }

    }, [data])

    useEffect(() => {

        if (userInfo) {
            handleAuthorizationsList()
        }

    }, [userInfo])

    useEffect(() => {

        if (dataAuthorizations) {
            //guardando en la bolsa
            setUserAuthorizationsList(dataAuthorizations)
        }

    }, [dataAuthorizations])

    return {
        get,
        handleUserInfo,
        userInfo,
        handleAuthorizationsList,
        userAuthorizationsList,
        handlePressAuthorization
    }
}