import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import colors from "../Themes/Colors";
import styles from "./styles/ChangePassWordScreenStyle";
import { AuthContext } from "../Providers/AuthProvider";

export default function InputNewPassword(props) {
  const { password, setPassword, setFulfill } = props;
  const authContext = useContext(AuthContext);
  const { changePassword } = authContext;
  // console.log("PASS", password);
  return (
    <View style={styles.container1}>
      <View style={styles.section}>
        <SmoothPinCodeInput
          changeNewPassword={changeNewPassword}
          onFulfill={() => {
            setFulfill(true);
          }}
          password
          mask=<View
            style={{
              width: 20,
              height: 20,
              borderRadius: 34,
              backgroundColor: "rgb(114, 13, 93)"
            }}
          />
          cellStyleFocused={{
            borderColor: colors.blueGrey
          }}
          cellSize={28}
          codeLength={6}
          value={password}
          onTextChange={setPassword}
          cellStyle={styles.cellStyle}
          autoFocus={true}
        />
      </View>
    </View>
  );
}
