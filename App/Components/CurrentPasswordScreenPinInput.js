import React, { useState, useEffect } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigationRef } from "../Navigation/RootNavigation";
import colors from "../Themes/Colors";
import styles from "./styles/CurrentPasswordScreenPinInputStyle";

function navigation(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function PinInput() {
  const [onFullfillPassword, setOnFullfillPassword] = useState(null);
  // function onTextChange(text) {
  //   const navigate = text.length >= 6 ? navigation("PinCode2") : "" ;
  //   // const navigate = text.length >= 6 ?
  // }
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <SmoothPinCodeInput
          onFulfill={navigation("PinCode1")}
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
          valueType={onFullfillPassword}
          cellStyle={styles.cellStyle}
          autoFocus={true}
          keyboardType={"phone-pad"}
        />
      </View>
    </View>
  );
}
