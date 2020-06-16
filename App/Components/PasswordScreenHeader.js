import React, { Component } from "react";
import { Text, ImageBackground } from "react-native";
import images from "../Images/images";
import styles from "./styles/PasswordScreenHeaderStyle"

export default class Header extends Component {
    render() {
        return (
            <ImageBackground source={images.HeaderBackground} style={{ height: 224 }}>
                <Text style={styles.text}> Chào mừng bạn quay lại UrBox</Text>
            </ImageBackground>
        );
    }
}

