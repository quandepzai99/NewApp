import React, { useState } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigationRef } from "../Navigation/RootNavigation";
import colors from "../Themes/Colors";
import styles from "./styles/CurrentPasswordScreenPinInputStyle";

function navigation(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function PinInput() {
  // state = {
  //   code: "",
  //   password: ""
  // };
  PinInput = React.createRef();

  const { password } = useState('');
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <SmoothPinCodeInput
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
            onTextChange={onTextChange}
            cellStyle={styles.cellStyle}
            autoFocus={true}
          />
        </View>
      </View>
    );


  function onTextChange(text) {
    // const { onPress } = this.props;
    const navigate = text.length >= 6 ? navigation("PinCode2") : null;
  }
}
