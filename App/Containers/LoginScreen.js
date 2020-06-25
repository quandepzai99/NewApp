import React, {useContext, useState} from 'react';
import { View, StatusBar, AppState, Alert } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LocalStorage } from "../Lib/LocalStorage";
import { AuthContext } from "../Providers/AuthProvider";
import { navigate } from "../Navigation/RootNavigation";

function LoginScreen() {
  const token = "";
  LocalStorage.get("access_token").then(data => {
    console.log("TOKENNNNN", data);
  });

  console.log("TOKEN", token);
  const authContext = useContext(AuthContext);
  const { isTokenValidated } = authContext;
  console.log("CONTEXT?", authContext);
  console.log("VALIDATED?", isTokenValidated);

  const [appState, setState] = useState(AppState.currentState);

  const handleAppStateChange = nextAppState => {
    isTokenValidated(appState, token, isValidated, isNotValidated);
    if (nextAppState === "active") {

      const validateToken = token => {
        token.setState(validateToken)
      }

    }setState(nextAppState);
  };
  const isValidated = is_alive => {
    if (is_alive) {
      navigate("PinCode");
    } else {
      Alert.alert("TOANGGGG");
    }
  };
  const isNotValidated = () => {};

  AppState.addEventListener("change", handleAppStateChange);

  // console.log('Fillll', onFullFill)
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
