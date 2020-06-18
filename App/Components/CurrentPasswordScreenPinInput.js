import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigationRef } from "../Navigation/RootNavigation";
import colors from "../Themes/Colors";
import styles from "./styles/CurrentPasswordScreenPinInputStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

function navigation(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function PinInput() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [code, setCode] = useState("");

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
          onTextChange={setCode}
          value={code}
          maskDelay={500}
          password={true}
          autoFocus={true}
          codeLength={6}
          onFulfill={() => navigation("PinCode2")}
        />
      </View>
    </View>
  );
}
