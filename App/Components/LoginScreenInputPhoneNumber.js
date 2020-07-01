import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthContext } from "../Providers/AuthProvider";

import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import colors from "../Themes/Colors";

import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigate } from "../Navigation/RootNavigation";

export default function LoginScreenInputPhoneNumber() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;

  const [text, setText] = useState("");
  const isActive = text.length >= 10;
  const floatStyle = getButtonStyle(isActive);
  const authContext = useContext(AuthContext);
  const { isPhoneNumberExist } = authContext;
  const { phoneRegister } = authContext;
  const { phone } = authContext.state;
  const onPress = getOnPress(isActive, isPhoneNumberExist, text, phoneRegister);

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

const registerPhone = (phone, phoneRegister) => {
  return () => {
    phoneRegister(phone);
  };
};

const getOnPress = (isActive, isPhoneNumberExist, phone) => {
  return isActive
    ? () => {
        isPhoneNumberExist(phone, onSuccess(), onFailed(), registerPhone());
      }
    : () => {};
};

const onSuccess = (isExist, phone, registerPhone) => {
  if (isExist === true) {
    return () => navigate("PasswordScreen");
  } else {
    registerPhone();
    navigate("OTPScreen", {
      phone: phone
    });
  }
};

const onFailed = () => {};

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

const ifSuccess = () => {};
const ifFailed = () => {};
