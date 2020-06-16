import React, { Component, useContext } from "react";
import { View, StatusBar } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LanguageContext } from "../Providers/LanguageProvider";

const onChangeLang = () => {};

function LoginScreen() {
  const context = useContext(LanguageContext);
  const { lang } = context.state;
  console.log(context);

  return (
    <View>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <LoginScreenHeader lang={lang} />
      <LoginScreenInputPhoneNumber onChangeLang={onChangeLang} lang={lang} />
      <GlobalChatPopUpIcon />
    </View>
  );
}

export default LoginScreen;
