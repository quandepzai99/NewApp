import React, { useState, useEffect, useContext } from "react";
import { Alert, View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigate } from "../Navigation/RootNavigation";
import colors from "../Themes/Colors";
import styles from "./styles/CurrentPasswordScreenPinInputStyle";
import { AuthContext } from "../Providers/AuthProvider";

export default function PinInput() {

  const [password, setPassword] = useState('');
  // const authContext = useContext(AuthContext);
  // const {checkCurrentPassword} = authContext;
  // const onFullFill = password => {
  //   checkCurrentPassword(password, onSuccess, onFailed);
  // }
  // console.log('confirm', password, onSuccess)
  const authContext = useContext(AuthContext);
  const {checkCurrentPassword} = authContext;
  const onFullFill = password => {
    checkCurrentPassword(password, onSuccess, onFailed);
  }
  console.log('fullfill', checkCurrentPassword, password, onFullFill)
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
          onFulfill={onFullFill}
        />
      </View>
    </View>
  );
}
const onSuccess = is_match => {
  if (is_match) {
    navigate("ChangePasswordScreen");
  } else {
    Alert.alert("Mật khẩu không chính xác");
  }
};

const onFailed = () => {};
