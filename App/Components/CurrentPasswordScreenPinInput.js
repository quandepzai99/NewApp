import React, { useState, useEffect, useContext } from "react";
import { Alert, View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigate } from "../Navigation/RootNavigation";
import colors from "../Themes/Colors";
import styles from "./styles/CurrentPasswordScreenPinInputStyle";
import { AuthContext } from "../Providers/AuthProvider";

export default function PinInput() {
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { isCurrentPasswordCorrect } = authContext;
  const onFullfill = text => {
    isCurrentPasswordCorrect(text, onSuccess, onFailed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
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
          onTextChange={setPassword}
          value={password}
          maskDelay={500}
          password={true}
          autoFocus={true}
          codeLength={6}
          onFulfill={onFullfill}
        />
      </View>
    </View>
  );
}
const onSuccess = is_match => {
  if (is_match) {
    navigate("Login");
  } else {
    Alert.alert("Mật khẩu không chính xác");
  }
};

const onFailed = () => {};
