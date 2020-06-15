import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../../colors";

export default function LanguageButton(props) {
  const { lang, onChangeLang } = props;
  const labelActiveStyle = {
    color: colors.blueGrey
  };

  const bgInactiveStyle = {
    backgroundColor: "transparent"
  };

  const bgActiveStyle = {
    backgroundColor: "white"
  };

  const textEngStyle =
    lang === "vi" ? [styles.textStyle, labelActiveStyle] : styles.textStyle;

  const textViStyle =
    lang === "vi" ? styles.textStyle : [styles.textStyle, labelActiveStyle];

  const btnVnStyle =
    lang === "en"
      ? [styles.buttonVNStyle, bgInactiveStyle]
      : [styles.buttonVNStyle, bgActiveStyle];

  const btnEngStyle =
    lang === "en"
      ? [styles.buttonENStyle, bgActiveStyle]
      : [styles.buttonENStyle, bgInactiveStyle];

  return (
    <TouchableOpacity style={styles.touchStyle} onPress={onChangeLang}>
      <View style={btnVnStyle}>
        <Text style={textViStyle}>VN</Text>
      </View>
      <View style={btnEngStyle}>
        <Text style={textEngStyle}>EN</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchStyle: {
    width: 76,
    height: 24,
    backgroundColor: colors.paleGreyFour,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 24,
    padding: 4,


  },
  buttonVNStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderRadius: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 1,
    paddingBottom: 3,
    marginTop: 3,
    marginBottom: 3
  },
  textStyle: {
    width: 18,
    height: 15,
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.velvet
  },
  buttonENStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    borderRadius: 24,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 1,
    paddingBottom: 3,
    marginLeft: 3,
    marginTop: 3,
    marginBottom: 3
  }
});
