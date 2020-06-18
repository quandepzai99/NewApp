import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import colors from "../Themes/Colors";

export default function LoginScreenInputPhoneNumber() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [text, setText] = useState("");

  const isActive = text.length >= 10;
  const floatStyle = getButtonStyle(isActive);
  const onPress = getOnPress(isActive);

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

const checkPhoneExist = (phone) => {

};

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

const getOnPress = isActive => {
  return isActive
    ? () => {
        navigate("PinCode");
      }
    : () => {};
};
