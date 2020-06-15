import React, { Component } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import images from "../../../Common/images";
import switchLanguage from "../../../I18N/selector";

export default class Header extends Component {
  render() {
    const { lang } = this.props;

    const text = switchLanguage(lang, "AuthenticationScreenLoginText");

    return (
      <ImageBackground source={images.HeaderBackground} style={{ height: 224 }}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    );
  }
}


