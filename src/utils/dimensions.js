import { Dimensions } from "react-native";

export const getWP = (percentage) => {
    return Dimensions.get('window').width * (percentage / 100);
}

export const getHP = (percentage) => {
    return Dimensions.get('window').height * (percentage / 100);
}