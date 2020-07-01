import { Dimensions, StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: (204 / 736) * Dimensions.get("screen").height,
    marginTop: -60,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 24,
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  inputOTP: {
    width: "100%",
    height: (164 / 736) * Dimensions.get("screen").height,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.paleGreyFour
  },
  textStyle: {
    fontSize: 28,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(71, 71, 71,0.9)"
  },
  focusedText: {
    fontSize: 32,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.greyishBrown
  },
  cellStyle: {
    borderWidth: 1,
    borderRadius: 8,
    width: (48 / 414) * Dimensions.get("screen").width,
    height: (68 / 736) * Dimensions.get("screen").height,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: colors.paleGreyFour,
    borderStyle: "solid",
    borderColor: colors.paleGreyFour
  },
  maskStyle: {
    width: 17,
    height: 17,
    borderRadius: 25,
    backgroundColor: colors.velvet
  },
  buttonGoback: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12
  }
});

export default styles;
