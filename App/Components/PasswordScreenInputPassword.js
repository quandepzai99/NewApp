import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import colors from "../Themes/Colors";
import images from "../Images/images";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./styles/PasswordScreenInputPasswordStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthProductionContext } from "../Providers/AuthProductionProvider";

export default function PasswordScreenInputPassword() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const authProductionContext = useContext(AuthProductionContext);
  const { checkPassword } = authProductionContext;
  console.log("authPro", {checkPassword});
  const [text, setText] = useState("");
  const isFullfilled = text.length >= 6;
  const onFullFill = getOnFullfilled(isFullfilled);
  console.log("fullfill", onFullFill);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{content.PasswordScreenInputPassword}</Text>
      <SmoothPinCodeInput
        cellStyle={styles.cellStyle}
        mask={<View style={styles.maskStyle} />}
        textStyle={{
          fontSize: 20,
          color: colors.velvet
        }}
        restrictToNumbers={true}
        textStyleFocused={{
          color: "red"
        }}
        cellStyleFocused={{
          borderColor: colors.blueGrey
        }}
        onTextChange={setText}
        value={text}
        maskDelay={500}
        password={true}
        autoFocus={true}
        codeLength={6}
        onFulfill={getOnFullfilled}
      />
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => navigate("PinCode1")}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={styles.text2}>
            {content.PasswordScreenForgotPassword}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btSignOut}
          onPress={() => navigate("Telephone")}>
          <Image source={images.icon_signout} style={{ top: 3, right: 5 }} />
          <Text style={styles.text3}>{content.PasswordScreenSignOut}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text4}>{content.PasswordScreenFaceID}</Text>
      </View>
    </View>
  );
}

const getOnFullfilled = (isFullFilled, checkPassword, password) => {
  return isFullFilled
    ? () => {
        checkPassword(password, onSuccess, onFailed);
      }
    : () => {};
};
const onSuccess = isFullFilled => {
  if (isFullFilled) {
    navigate("Home");
    console.log("Is Fullfilled", isFullFilled);
  } else {
    Alert.alert("toang r ban oi");
  }
};

const onFailed = () => {};
