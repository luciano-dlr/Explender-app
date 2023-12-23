import { StyleSheet } from "react-native";
import { getHP, getWP } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    height: getHP(90),
    backgroundColor: "#fff",
  },
  header: {
    padding: getHP(1),
    backgroundColor: "#880e4f",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  body: {
    padding: getHP(1),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff"
  },
  titleDays: {
    padding: getHP(2),
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  day: {
    padding: getHP(2),
  },
  dayLabel: {
    fontSize: 16,
    fontWeight: "400",

  },
  dayValue: {
    fontSize: 16,
    fontWeight: "600",
  },

  floatingButtonContainer: {
    flex: 1,
    position: 'absolute',
    bottom: getHP(0),
    right: getWP(5),
  },

  iconoEdit: {
    width: getWP(10),
    height: getHP(5),
  }
});