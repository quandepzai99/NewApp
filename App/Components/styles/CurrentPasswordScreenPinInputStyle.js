import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderColor: "rgb(230,236,240)",
    borderWidth: 1
  },
  section: {
    alignItems: "center",
    margin: 4
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cellStyle: {
      borderWidth: 1,
      borderRadius: 24,
      width: 28,
      height: 28,
      borderColor: colors.paleGreyFour,
      backgroundColor: "#fff",
      marginLeft: 16
  },
  maskStyle: {
    width: 17,
    height: 17,
    borderRadius: 25,
    backgroundColor: colors.velvet
  }
});

export default styles;
