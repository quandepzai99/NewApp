import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
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
        <StatusBar
          barStyle={"light-content"}
          translucent={true}
          backgroundColor={"transparent"}
        />
        <LoginScreenHeader lang={lang} />
        <LoginScreenInputPhoneNumber
          onChangeLang={this.onChangeLang}
          lang={lang}
        />
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
