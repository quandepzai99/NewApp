import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    top: 10
  },
  title: {
    marginLeft: 16,
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0,
    color: colors.velvet
  },
  btnBanner: {
    top: 10,
    borderRadius: 12,
    marginHorizontal: 16,
    alignItems: "center",
    width: 368,
    height: 260,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 5
  },
  desc: {
    paddingVertical: 10,
    fontSize: 15,
    paddingRight: 30,
    padding: 10,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.greyishBrown
  },
  name: {
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    color: colors.blueGrey
  },
  divider: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.paleGreyFour,
    borderTopWidth: 1,
    left: 10,
    marginRight: 20
  }
});

export default styles;
