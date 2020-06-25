import React, { useContext } from "react";
import { View, StatusBar, AppState, Alert } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import API from "../Lib/API";
import { LocalStorage } from "../Lib/LocalStorage";
import { AuthContext } from "../Providers/AuthProvider";
import { navigate } from "../Navigation/RootNavigation";

function LoginScreen() {
  LocalStorage.get("access_token").then(data => {
    // console.log("TOKENNNNN", token);
  });

  // console.log("TOKEN", token);
  const authContext = useContext(AuthContext);
  const { isTokenValidated } = authContext;
  // console.log("CONTEXT?", authContext);
  // console.log("VALIDATED?", isTokenValidated);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      validateToken();
    }
  };
  const validateToken = token => {
    isTokenValidated(isTokenValidated, token, onSuccess, onFailed);
  };

  const onSuccess = is_alive => {
    if (is_alive) {
      navigate("Home");
    } else {
      Alert.alert("TOANGGGG");
    }
  };
  const onFailed = () => {};

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
