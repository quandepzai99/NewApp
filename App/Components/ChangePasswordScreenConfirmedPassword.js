import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import colors from "../Themes/Colors";
import styles from "./styles/ChangePassWordScreenStyle";

export default function InputConfirmPassword(props) {
  const {
    confirmPassword,
      onConfirmPasswordChange
  } = props;

  // console.log("PASSduoi", confirmPassword);
  // console.log("FULLFILL duoi");

  return (
    <View style={styles.container1}>
      <View style={styles.section}>
        <SmoothPinCodeInput
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
          password
          cellSize={28}
          codeLength={6}
          value={confirmPassword}
          onTextChange={onConfirmPasswordChange}
          cellStyle={styles.cellStyle}
          autoFocus={true}
        />
      </View>
    </View>
  );
}
