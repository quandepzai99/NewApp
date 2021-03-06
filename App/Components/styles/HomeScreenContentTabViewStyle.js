import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollStyle: {
    marginTop: 20,
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    alignItems: "center",
    marginLeft: 16
  },
  tabView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.01)"
  },
  iconStyle: {
    width: 72,
    height: 72,
    borderRadius: 38,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    shadowColor: "rgba(22, 60, 132, 0.1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    position: "absolute"
  },
  container: {
    top: 30
  },
  logo_icon: {
    width: 72,
    height: 72,
    borderRadius: 38,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    top: -5,
    shadowColor: "rgba(22, 60, 132, 0.1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    position: "absolute"
  },
  icon_name: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16
  }
});

export default styles;
