import React, {useContext, useState} from 'react';
import { View, StatusBar, AppState, Alert } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LocalStorage } from "../Lib/LocalStorage";
import { AuthContext } from "../Providers/AuthProvider";
import { navigate } from "../Navigation/RootNavigation";

function LoginScreen() {
  const token = LocalStorage.get("access_token").then(data => {
    console.log("TOKENNNNN", data);
    return JSON.parse(data);
  });
  // LocalStorage.get("access_token").then(data => {
  //   console.log("TOKENNNNN", data);
  // });
  // const parsed = JSON.parsed()
  const onFullFill = token => {
    isTokenValidated(token, appState, isValidated, isNotValidated);
  };

  const [appState, setState] = useState(AppState.currentState);

  console.log("TOKEN", token);
  const authContext = useContext(AuthContext);
  const { isTokenValidated } = authContext;
  console.log("CONTEXT?", authContext);
  console.log("VALIDATED?", isTokenValidated);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
        onFullFill(appState)

    }setState(nextAppState);
  };
  const isValidated = is_alive => {
    if (is_alive.status) {
      navigate("PinCode");
    } else {
      Alert.alert("So");
    }
  };
  const isNotValidated = () => {};

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
