import React from "react";
import { View, StatusBar } from "react-native";
import PasswordScreenHeader from "../Components/PasswordScreenHeader";
import InputPassword from "../Components/PasswordScreenInputPassword";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";

export default function PasswordScreen() {
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <PasswordScreenHeader />
      <InputPassword />
      <GlobalChatPopUpIcon />
    </View>
  );
}
