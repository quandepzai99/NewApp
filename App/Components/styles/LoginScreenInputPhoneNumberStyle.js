import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  trans: {
    paddingTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30
  },
  input: {
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.greyishBrown,
    height: 60,
    borderColor: colors.paleGreyFour,
    borderWidth: 1,
    marginTop: 33,
    borderRadius: 12,
    marginBottom: 76,
    borderStyle: "solid",
    marginHorizontal: 16,
    paddingHorizontal: 16
  },

  text1: {
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center"
  },
  text2: {
    position: "absolute",
    left: 32,
    top: 80,
    zIndex: 1,
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    color: colors.blueGrey
  },
  floatButton: {
    width: 78,
    height: 78,
    position: "absolute",
    justifyContent: "center",
    bottom: -40,
    left: "50%",
    alignItems: "center",
    marginLeft: -40,
    marginRight: 140,
    borderRadius: 40,

    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 4,
    backgroundColor: colors.blueGrey
  },
  ellipse531: {
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 4
  },
  icon: {
    margin: 16
  }
});

export default styles;
