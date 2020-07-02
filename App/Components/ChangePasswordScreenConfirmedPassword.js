import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import colors from "../Themes/Colors";
import styles from "./styles/ChangePassWordScreenStyle";

export default function InputConfirmPassword(props) {
  const {
    confirmPassword,
    setConfirmPassword,
    setFulfillConfirmPassword
  } = props;
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const firstRender = useRef("true");
  // useEffect(() => {
  //   console.log("isFirstRender", firstRender.current);
  //   console.log("pass", confirmPassword);
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //   }
  //   setConfirmPassword({ ...confirmPassword });
  // });

  return (
    <View style={styles.container1}>
      <View style={styles.section}>
        <SmoothPinCodeInput>
          mask=
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 34,
              backgroundColor: "rgb(114, 13, 93)"
            }}
          />
          cellStyleFocused=
          {{
            borderColor: colors.blueGrey
          }}
          password cellSize=
          {28}
          codeLength=
          {6}
          value=
          {confirmPassword}
          onTextChange=
          {setConfirmPassword}
          cellStyle=
          {styles.cellStyle}
          autoFocus=
          {true}
        </SmoothPinCodeInput>
      </View>
    </View>
  );
}
