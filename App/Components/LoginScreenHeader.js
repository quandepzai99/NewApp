import React from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import switchLanguage from "../I18n/selector";
import styles from "./styles/LoginScreenHeaderStyle";

export default function LoginScreenHeader() {
  const { lang } = this.props;

  const text = switchLanguage(lang, "AuthenticationScreenLoginText");

  return (
    <ImageBackground source={images.backGround} style={{ height: 224 }}>
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  );
}
