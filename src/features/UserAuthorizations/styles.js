import { StyleSheet } from "react-native";
import { getHP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: getHP(2),
    backgroundColor: "#fff",
  },
  authorizationItem: {
    padding: getHP(1),
    backgroundColor: '#880e4f',
    margin: getHP(1),
    borderRadius: 7,
  },
  authorizationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: "justify",
  }
});