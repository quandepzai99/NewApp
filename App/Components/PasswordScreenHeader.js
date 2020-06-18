import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import styles from "./styles/PasswordScreenHeaderStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function Header() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  return (
    <ImageBackground source={images.backGround} style={{ height: 224 }}>
      <Text style={styles.text}> {content.PasswordScreenHeader}</Text>
    </ImageBackground>
  );
}
