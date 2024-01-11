import { StyleSheet } from "react-native";
import { getHP } from "../../utils/dimensions";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemContainer: {
        padding: getHP(1),
        backgroundColor: '#880e4f',
        margin: getHP(1),
        borderRadius: 7,
    },
    ContentItemContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-between",
        paddingHorizontal:10
    },
    textItemContainer:{
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: "justify",
    },
    iconItemContainer:{
        color: 'black'
    }
});