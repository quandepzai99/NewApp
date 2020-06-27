import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import { LanguageContext } from "../Providers/LanguageProvider";
import styles from "./styles/ChangePasswordHeaderStyles";

export default function ChangePasswordScreenHeader() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  return (
    <ImageBackground source={images.backGround} style={styles.backgroundImage}>
      <Text style={styles.headerText}>
        {content.ChangePasswordScreenHeader}{" "}
      </Text>
    </ImageBackground>
  );
}
