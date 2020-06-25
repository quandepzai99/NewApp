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
  const token = LocalStorage.get("savedToken");
  const authContext = useContext(AuthContext);
  const { isTokenValidated } = authContext;
  console.log("CONTEXT?", authContext);
  console.log("VALIDATED?", isTokenValidated);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      const validateToken = token => {
        isTokenValidated(token, isValidated, isNotValidated);
      };
    }
  };
  const isValidated = is_alive => {
    if (is_alive) {
      navigate("PinCode2");
    } else {
      Alert.alert("TOANGGGG");
    }
  };
  const isNotValidated = () => {};

  AppState.addEventListener("change", handleAppStateChange);
  console.log("TOKEN", token);

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
