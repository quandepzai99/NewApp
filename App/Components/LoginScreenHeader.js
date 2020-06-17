import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import styles from "./styles/LoginScreenHeaderStyle";

export default class LoginScreenHeader extends Component {
  render() {
    return (
      <ImageBackground source={images.backGround} style={{ height: 224 }}>
        <Text style={styles.text}>heello</Text>
      </ImageBackground>
    );
  }
}
