import React from "react";
import { View, StatusBar, AppState } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import API from "../Lib/API";

function LoginScreen() {
  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      checkToken();
    }
  };

  AppState.addEventListener("change", handleAppStateChange);

  async function checkToken() {
    const response = await API.validateToken(token);
    if (response.status) {
      const { data } = response;
      const { is_alive } = data;
      console.log("status", response.status);
      console.log("DATATATATA", data);
    }
  }

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
