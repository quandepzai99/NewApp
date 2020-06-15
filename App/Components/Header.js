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

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 30,
    fontSize: 32,
    marginTop: 70,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: "center",
    color: "#fff"
  }
});
