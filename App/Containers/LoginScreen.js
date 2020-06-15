import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Form from "./component/InputPhoneNumber";
import Header from "./component/Header";
import Chat from "./component/ChatPopUpIcon";

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
        <Header lang={lang} />
        <Form onChangeLang={this.onChangeLang} lang={lang} />
        <Chat />
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
