import React, { useContext, useEffect } from "react";
import { View, StatusBar, AppState } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LocalStorage } from "../Lib/LocalStorage";
import { navigate } from "../Navigation/RootNavigation";
import { AuthContext } from "../Providers/AuthProvider";
import API from "../Lib/API";

function LoginScreen() {
  const authContext = useContext(AuthContext);
  const { isTokenValidated } = authContext;

  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      LocalStorage.get("access_token").then(token => {
        console.log("tokennn", token);
        if (token !== null) {
          API.setAccessToken(token);
          isTokenValidated(token, onSuccess, onFailed);
        }
      });
    }
  };

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

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

const onSuccess = is_alive => {
  if (is_alive) {
    navigate("PasswordScreen");
  } else {
    navigate("LoginScreen");
  }
};
const onFailed = () => {};
// const onFailed = () => {};

export default LoginScreen;
