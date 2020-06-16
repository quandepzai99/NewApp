import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import PasswordScreenHeader from "../Components/PasswordScreenHeader";
import InputPassword from "../Components/PasswordScreenInputPassword";
import ChatPopUpIcon from "../Components/ChatPopUpIcon";

class index extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle={"light-content"} />
        <PasswordScreenHeader />
        <InputPassword />
        <ChatPopUpIcon />
      </View>
    );
  }
}

export default index;
