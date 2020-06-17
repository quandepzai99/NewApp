import React, {useContext} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import colors from "../Themes/Colors";
import styles from "./styles/LoginScreenLanguageButtonStyle";
import  {LanguageContext} from '../Providers/LanguageProvider';

export default function GlobalLanguageButton(props) {
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
