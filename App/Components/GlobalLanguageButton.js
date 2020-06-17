import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import colors from "../Themes/Colors";
import styles from "./styles/LoginScreenLanguageButtonStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function GlobalLanguageButton() {
  // function ChangeStateLanguageButton() {
  //   const [langColor, setLangColor] = useState(styles.textStyle);
  //   const [buttonColor, setButtonColor] = useState(styles.buttonVNStyle);
  //
  // }

  // return (
  //   <TouchableOpacity
  //     style={styles.touchStyle}
  //     onPress={() => setLangColor("red")}>
  //     <View style={buttonColor}>
  //       <Text style={langColor}>VN</Text>
  //     </View>
  //     <View style={btnEngStyle}>
  //       <Text style={textEngStyle}>EN</Text>
  //     </View>
  //   </TouchableOpacity>
  // );
  return <View />;
}
