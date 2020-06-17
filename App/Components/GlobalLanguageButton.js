import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import colors from "../Themes/Colors";
import styles from "./styles/GlobalLangueButtonStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function GloabalLanguageButton() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext.state;
  const { setLanguage } = languageContext;
  const newLang = language === "vi" ? "en" : "vi";

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
    language === "vi" ? [styles.textStyle, labelActiveStyle] : styles.textStyle;

  const textViStyle =
    language === "vi" ? styles.textStyle : [styles.textStyle, labelActiveStyle];

  const btnVnStyle =
    language === "en"
      ? [styles.buttonVNStyle, bgInactiveStyle]
      : [styles.buttonVNStyle, bgActiveStyle];

  const btnEngStyle =
    language === "en"
      ? [styles.buttonENStyle, bgActiveStyle]
      : [styles.buttonENStyle, bgInactiveStyle];

  return (
    <TouchableOpacity
      style={styles.touchStyle}
      onPress={() => setLanguage(newLang)}>
      <View style={btnVnStyle}>
        <Text style={textViStyle}>VN</Text>
      </View>
      <View style={btnEngStyle}>
        <Text style={textEngStyle}>EN</Text>
      </View>
    </TouchableOpacity>
  );
}
