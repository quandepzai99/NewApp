import React, { useContext, useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, AppState} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-community/async-storage';

import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthContext } from "../Providers/AuthProvider";

import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import colors from "../Themes/Colors";

import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigate } from "../Navigation/RootNavigation";
import {LocalStorage} from '../Lib/LocalStorage';


export default function LoginScreenInputPhoneNumber() {
  // const token = "";
  // LocalStorage.get("access_token").then(data => {
  //   // console.log("TOKENNNNN", data);
  // });
  //
  // console.log("TOKEN", token);
  // const authContext = useContext(AuthContext);
  // const { isTokenValidated } = authContext;
  // // console.log("CONTEXT?", authContext);
  // // console.log("VALIDATED?", isTokenValidated);
  //
  // const [appState, setState] = useState(AppState.currentState);
  //
  // const handleAppStateChange = nextAppState => {
  //   if (nextAppState === "active") {
  //     const validateToken = token => {
  //       isTokenValidated(token, isValidated, isNotValidated);
  //       setState(validateToken)
  //     }
  //     return setState(nextAppState);
  //   }
  // };
  // const isValidated = is_alive => {
  //   if (is_alive) {
  //     navigate("PinCode");
  //   } else {
  //     Alert.alert("TOANGGGG");
  //   }
  // };
  // const isNotValidated = () => {};
  //
  // AppState.addEventListener("change", handleAppStateChange);
  //
  // const onFullFill = token => {
  //   isTokenValidated(token, appState, isValidated, onFailed);
  // };
  // console.log('Fillll', onFullFill)



  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;

  const [text, setText] = useState("");
  const isActive = text.length >= 10;
  const floatStyle = getButtonStyle(isActive);

  const authContext = useContext(AuthContext);
  const { isPhoneNumberExist } = authContext;
  const onPress = getOnPress(isActive, isPhoneNumberExist, text);

  return (
    <View style={styles.container}>
      <View style={styles.trans}>
        <Text style={styles.text1}>{content.LoginScreenEnterPhoneNumber}</Text>
        <GlobalLanguageButton />
      </View>
      <Text style={styles.text2}>{content.LoginScreenPhoneNumber}</Text>
      <TextInput
        onChangeText={setText}
        placeholder={"0901234567"}
        style={styles.input}
        maxLength={20}
        autoFocus={true}
        textContentType="telephoneNumber"
        dataDetectorTypes="phoneNumber"
        keyboardType="phone-pad"
      />
      <TouchableOpacity onPress={onPress} style={floatStyle}>
        <View style={styles.ellipse531}>
          <AntDesign name="arrowright" size={28} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const getButtonStyle = isActive => {
  return isActive
    ? [
        styles.floatButton,
        {
          backgroundColor: colors.velvet
        }
      ]
    : styles.floatButton;
};

const getOnPress = (isActive, isPhoneNumberExist, phone) => {
  return isActive
    ? () => {
        // console.log("IS EXIST:", phone);
        isPhoneNumberExist(phone, onSuccess, onFailed);
      }
    : () => {};
};

const onSuccess = isExist => {
  if (isExist) {
    navigate("PinCode");
  } else {
    Alert.alert("So dien thoai nay chua ton tai");
  }
  console.log("Exist", isExist)
};

const onFailed = () => {};
