import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/index";

export default function HeaderChangePass() {
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
        Đổi mật khẩu
      </Text>
    </ImageBackground>
  );
}
