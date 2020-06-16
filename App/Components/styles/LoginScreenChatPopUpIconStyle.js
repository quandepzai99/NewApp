import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    bottom: -60,
    width: 76,
    height: 76,
    borderRadius: 40,
    backgroundColor: "rgba(114, 13, 93, 0.1)"
  },

  ellipse608: {
    alignItems: "center",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: colors.paleGreyFour
  },
  chat: {
    margin: 14
  }
});

export default styles;
