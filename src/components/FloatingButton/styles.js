import { StyleSheet } from "react-native";
import { getHP, getWP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: getHP(0),
        right: getWP(5),
        



    },
   
    iconoEdit: {
        width: getWP(10),
        height:getHP(5),
        
        

    }
});