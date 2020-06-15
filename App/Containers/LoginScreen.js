import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import InputPhoneNumber from "../Components/InputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import ChatPopUpIcon from "../Components/ChatPopUpIcon";

class index extends Component {
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
        <InputPhoneNumber onChangeLang={this.onChangeLang} lang={lang} />
        <ChatPopUpIcon />
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

export default index;
