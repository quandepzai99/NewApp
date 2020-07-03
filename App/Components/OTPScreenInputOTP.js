import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../Themes/Colors";
import styles from "./styles/OTPScreenInputOTPStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthContext } from "../Providers/AuthProvider";
import { navigate } from "../Navigation/RootNavigation";

export default function InputOTP(props) {
  const { phone } = props;
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;

  const [otp, setOTP] = useState("");
  const authContext = useContext(AuthContext);
  const { confirmOTP } = authContext;

  const onSuccess = (is_match, is_expired) => {
    if (is_match === true && is_expired === false) {
      navigate("HomeScreen");
    } else {
      Alert.alert("OTP không chính xác");
    }
  };
  const onFailed = () => {};

  const onFullfill = () => {
    try {
      (async function() {
        await confirmOTP(phone, otp, onSuccess, onFailed);
      })();
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputOTP}>
        <SmoothPinCodeInput
          value={otp}
          onTextChange={setOTP}
          cellStyle={styles.cellStyle}
          codeLength={6}
          placeholder={"0"}
          textStyle={styles.textStyle}
          cellStyleFocused={{ borderColor: "rgba(114, 13, 93, 0.4)" }}
          autoFocus={true}
          textStyleFocused={styles.focusedText}
          animated={true}
          editable={true}
          restrictToNumbers={true}
          onFulfill={() => {
            onFullfill();
          }}
        />
      </View>
      <View style={styles.buttonGoback}>
        <TouchableOpacity
          onPress={() => navigate("LoginScreen")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            paddingRight: 10,
            borderBottomLeftRadius: 12
          }}>
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
          style={{
            fontSize: 16,
            lineHeight: 16,
            padding: 10,
            color: colors.blueGrey,
            justifyContent: "center",
            alignSelf: "center"
          }}>
          {content.OTPScreenStatus}
        </Text>
      </View>
    </View>
  );
}
