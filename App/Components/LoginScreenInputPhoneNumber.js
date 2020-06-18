import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthContext } from "../Providers/AuthProvider";

import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import colors from "../Themes/Colors";

import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigate } from "../Navigation/RootNavigation";

export default function LoginScreenInputPhoneNumber() {
  const languageContext = useContext(LanguageContext);
  const authContext = useContext(AuthContext);

  const { content } = languageContext.state;
  const { isPhoneNumberExist } = authContext;
  const [text, setText] = useState("");

  const isActive = text.length >= 10;
  const floatStyle = getButtonStyle(isActive);
  const onPress = getOnPress(isActive, isPhoneNumberExist, text);

  console.log("IS ACTIVE", isActive);
  console.log("ONPRESSSS", onPress);

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
        console.log("IS EXIST:", phone);
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
};

const onFailed = () => {};
