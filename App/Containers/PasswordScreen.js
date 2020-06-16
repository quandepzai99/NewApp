import React from "react";
import { View, StatusBar } from "react-native";
import PasswordScreenHeader from "../Components/PasswordScreenHeader";
import InputPassword from "../Components/PasswordScreenInputPassword";
import ChatPopUpIcon from "../Components/ChatPopUpIcon";

export default function PasswordScreen() {

    return (
      <View>
        <StatusBar barStyle={"light-content"} />
        <PasswordScreenHeader />
        <InputPassword />
        <ChatPopUpIcon />
      </View>
    );
  }


