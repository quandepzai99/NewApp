import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigationRef } from "../Navigation/RootNavigation";
import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import en from "../I18n/en";
import LoginScreenHeader from "./LoginScreenHeader";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function LoginScreenInputPhoneNumber() {
  return (
    <View style={styles.container}>
      <View style={styles.trans}>
        <Text style={styles.text1}>{en.LoginScreenHeader}</Text>
        <GlobalLanguageButton />
      </View>
      <Text style={styles.text2}>{en.LoginScreenHeader}</Text>
      <TextInput
        placeholder={"0901234567"}
        style={styles.input}
        keyboardType="phone-pad"
        maxLength={10}
        autoFocus={true}
      />
      <TouchableOpacity
        onPress={() => navigate("PinCode")}
        style={[styles.ellipse529, { backgroundColor: "red" }]}>
        <View style={styles.ellipse531}>
          <AntDesign
            name={"arrowright"}
            size={28}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
