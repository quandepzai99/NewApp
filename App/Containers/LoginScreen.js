import React, {useContext, useState} from 'react';
import { View, StatusBar, AppState } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import {LocalStorage} from '../Lib/LocalStorage';
import {AuthActions} from '../ReduxHooks/AuthActions';


function LoginScreen() {
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = nextAppState => {
    if (nextAppState === "active") {
      console.log("STATEEEE", nextAppState);

    }
    appState(nextAppState);
  };
  // console.log('asasa', handleAppStateChange)

  // AppState.addEventListener("change", handleAppStateChange);

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
