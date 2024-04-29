import { StyleSheet } from "react-native";
import { getHP } from "../../utils/dimensions";

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        // height: getHP(80),
        padding: getHP(2),
        backgroundColor: "#fff",
    },
    itemContainer: {
        padding: getHP(1),
        backgroundColor: '#880e4f',
        margin: getHP(1),
        borderRadius: 7,
    },
    ContentItemContainer: {

    },
    textItemContainer: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: "justify",
    },
    iconItemContainer: {
        color: 'black'
    }
});
