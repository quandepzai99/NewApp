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

  const [phone, setPhone] = useState("");
  const isActive = phone.length >= 10;
  const authContext = useContext(AuthContext);
  const { phoneRegister, isPhoneNumberExist } = authContext;

  const onSuccess = response => {
    const { is_exist, phone } = response.data;
    if (is_exist === true) {
      navigate("PasswordScreen");
    } else {
      console.log("NOT EXIST");
      registerPhone(phone);
      navigate("OTPScreen", {
        phone: phone
      });
    }
  };
  const onFailed = () => {};

  const getOnPress = () => {
    try {
      (async function() {
        await isPhoneNumberExist(phone, onSuccess, onFailed);
      })();
    } catch (e) {}
  };

  const registerPhone = phone => {
    try {
      (async function() {
        await phoneRegister(phone);
      })();
    }catch (e) {

    }
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
  const floatStyle = getButtonStyle(isActive);

  return (
    <View style={styles.container}>
      <View style={styles.trans}>
        <Text style={styles.text1}>{content.LoginScreenEnterPhoneNumber}</Text>
        <GlobalLanguageButton />
      </View>
      <Text style={styles.text2}>{content.LoginScreenPhoneNumber}</Text>
      <TextInput
        onChangeText={text => {
          setPhone(text);
        }}
        value={phone}
        placeholder={"0901234567"}
        style={styles.input}
        maxLength={20}
        autoFocus={true}
        textContentType="telephoneNumber"
        dataDetectorTypes="phoneNumber"
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        onPress={() => {
          getOnPress();
        }}
        style={floatStyle}>
        <View style={styles.ellipse531}>
          <AntDesign name="arrowright" size={28} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
