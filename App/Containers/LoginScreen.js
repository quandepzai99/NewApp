import React from "react";
import { View, StatusBar, AppState } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";


function LoginScreen() {
  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      console.log("STATEEEE", nextAppState);
    }
  };

  AppState.addEventListener("change", handleAppStateChange);

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
