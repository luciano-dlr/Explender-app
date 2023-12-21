import { useEffect, useState } from "react";
import useGetUserData from "../../hooks/user/useGetUserData";
import { useUserStore } from "../../zustand/useUserStore";
import { useAuthStore } from "../../zustand/useAuthStore";
import usePostAuthorizations from "../../hooks/authorizations/usePostAuthorizations";
import { useAuthorizationsStore } from "../../zustand/useAuthorizationsStore";

export const useAuthorizationsController = () => {

    const token = useAuthStore((bolsa) => bolsa.userData?.token);
    const setUserInfo = useUserStore((bolsa) => bolsa.setUserInfo);
    const userInfo = useUserStore((bolsa) => bolsa.userInfo);

    const { userAuthorizationsList, setUserAuthorizationsList } = useAuthorizationsStore();

    const { get, data } = useGetUserData()

    const handleUserInfo = () => {

        get(token);
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

    //To Do 
    //Ojo leio la fecha es muy importante en la app

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

    const { post, dataAuthorizations } = usePostAuthorizations()

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
        userAuthorizationsList
    }
}

