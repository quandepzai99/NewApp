import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import switchLanguage from "../I18n/selector";
import styles from "./styles/LoginScreenHeaderStyle";

export default class LoginScreenHeader extends Component {
  render() {
    const { lang } = this.props;

    const text = switchLanguage(lang, "LoginScreenHeader");

    return (
      <ImageBackground source={images.backGround} style={{ height: 224 }}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    );
  }
}
