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

