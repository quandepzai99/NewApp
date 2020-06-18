import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigationRef } from "../Navigation/RootNavigation";
import styles from "./styles/LoginScreenInputPhoneNumberStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import colors from "../Themes/Colors";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function LoginScreenInputPhoneNumber() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [changeColor, setChangeColor] = useState(false);
  console.log("changeColorrrr", changeColor);

  return (
    <View style={styles.container}>
      <View style={styles.trans}>
        <Text style={styles.text1}>{content.LoginScreenEnterPhoneNumber}</Text>
        <GlobalLanguageButton />
      </View>
      <Text style={styles.text2}>{content.LoginScreenPhoneNumber}</Text>
      <TextInput
        onChangeText={() => setChangeColor(true)}
        placeholder={"0901234567"}
        style={styles.input}
        maxLength={10}
        autoFocus={true}
      />
      <TouchableOpacity
        onPress={() => navigate("PinCode")}
        style={
          ([styles.ellipse529],
          { backgroundColor: changeColor ? colors.velvet : colors.blueGrey })
        }>
        <View style={styles.ellipse531}>
          <AntDesign name={"arrowright"} size={28} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
