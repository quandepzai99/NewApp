import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LanguageContext } from "../Providers/LanguageProvider";

function LoginScreen() {
  return (
    <View>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <LoginScreenHeader />
      <LoginScreenInputPhoneNumber />

      <GlobalChatPopUpIcon />
    </View>
  );
}

export default LoginScreen;
