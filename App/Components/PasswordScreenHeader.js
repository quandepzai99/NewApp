import React from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import styles from "./styles/PasswordScreenHeaderStyle";

export default function Header() {
  return (
    <ImageBackground source={images.backGround} style={{ height: 224 }}>
      <Text style={styles.text}> Chào mừng bạn quay lại UrBox</Text>
    </ImageBackground>
  );
}
