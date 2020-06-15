import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import background from "../../../Picture/BG.png";

export default class HeaderChangePass extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
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
          Đổi mật khẩu
        </Text>
      </ImageBackground>
    );
  };
}

