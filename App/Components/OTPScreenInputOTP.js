import React, { useState, useContext } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Themes/Colors";
import styles from "./styles/OTPScreenInputOTPStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function InputOTP() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputOTP}>
        <SmoothPinCodeInput
          value={text}
          onTextChange={setText}
          cellStyle={styles.cellStyle}
          codeLength={6}
          placeholder={"0"}
          textStyle={styles.textStyle}
          cellStyleFocused={{ borderColor: "rgba(114, 13, 93, 0.4)" }}
          autoFocus={true}
          textStyleFocused={styles.focusedText}
          animated={false}
          editable={true}
          restrictToNumbers={true}
        />
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            name={"left"}
            size={20}
            color={colors.blueGrey}
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10
            }}
          />
          <Text
            style={{
              fontSize: 16,
              lineHeight: 16,
              color: colors.blueGrey
            }}>
            {content.GobackButton}
          </Text>
        </TouchableOpacity>
        <Text
          style={{ paddingRight: 10, paddingTop: 10, color: colors.blueGrey }}>
          {content.OTPScreenStatus}
        </Text>
      </View>
    </View>
  );
}
