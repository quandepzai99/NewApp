import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";
import InputPhoneNumber from "../Components/InputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "vi"
    };
  }

  render() {
    const { lang } = this.state;

    return (
      <View>
        <StatusBar barStyle={"light-content"} translucent={true} backgroundColor={'transparent'}/>
        <LoginScreenHeader lang={lang} />
        <InputPhoneNumber onChangeLang={this.onChangeLang} lang={lang} />
        <GlobalChatPopUpIcon />
      </View>
    );
  }

  onChangeLang = () => {
    const { lang } = this.state;
    const newLang = lang === "en" ? "vi" : "en";

    console.log("new lange:", newLang);
    this.setState({
      lang: newLang
    });
  };
}

export default LoginScreen;
