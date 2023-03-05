import { StyleSheet } from "react-native";

export const accentColor = "rgb(255,235,219)";
export const primaryColor = "rgb(255,249,242)";
export const linkColor = "rgb(253,154,47)";
export const lightGrey = "rgb(130,130,130)";
export const successGreen = "rgb(17,230, 79)";
export const electricYellow = "rgb(255,255,51)";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  lightText: {
    color: lightGrey,
    fontWeight: "500",
  },
  float: {
    elevation: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  textinput: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: accentColor,
    borderColor: linkColor,
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flex_center: {
    marginStart: "auto",
    marginEnd: "auto",
  },
  row_start: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  row_center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  column_center: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formButton: {
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 40,
  },
  formButtonText: { color: "white" },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
