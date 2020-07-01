import React, { useContext } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function HeaderChangePass() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  return (
    <ImageBackground
      source={images.backGround}
      style={{
        width: "100%",
        height: 200,
        justifyContent: "center"
      }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          fontStyle: "normal",
          lineHeight: 40,
          letterSpacing: 0,
          textAlign: "center",
          color: "#ffffff",
          justifyContent: "center"
        }}>
        {content.CurrentPasswordScreenHeader}
      </Text>
    </ImageBackground>
  );
}
