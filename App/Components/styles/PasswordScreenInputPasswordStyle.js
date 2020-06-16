import { StyleSheet } from "react-native";
import colors from "../../Themes/Colors"
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: -40,
    shadowColor: "#000",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  text1: {
    marginTop: 32,
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center"
  },
  box: {
    flexDirection: "row",
    marginTop: 35
  },
  btSignOut: {
    marginRight: 16,
    top: -5,
    flexDirection: "row",
    paddingTop: 15,
    left: 50
  },
  text2: {
    marginLeft: 10,
    right: 30,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,

    color: colors.deepSkyBlue
  },
  text3: {
    marginRight: 10,
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.red
  },
  box2: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginTop: 24,
    width: "100%",
    alignItems: "center",
    borderTopWidth: 0.5
  },
  text4: {
    marginTop: 14,
    marginBottom: 14,
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.blueGrey
  }
});

export default styles;
