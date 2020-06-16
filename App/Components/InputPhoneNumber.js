import React, {Component, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import colors from "../Themes/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import GlobalLanguageButton from "./GlobalLanguageButton";
import { navigationRef } from "../Navigation/RootNavigation";
import switchLanguage from "../I18n/selector";
import styles from "./styles/LoginScreenInputPhoneNumberStyle";

// const navigationRef = React.createRef();

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function InputPhoneNumber() {
  const [colors, setColors] = useState("blue");
  // colorButton = ["#fff"];
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     Reds: colors.blueGrey
  //   };
  // }

  function handleKeyup(index) {
    const mau = ['red'];
    if (mau.length > 0) {
      setColors(mau);
    } else {
      setColors(colors)
    }
  }

  // const { lang, onChangeLang } = this.props;
  //
  // const bigText = switchLanguage(lang, "AuthenticationScreenPhoneText");
  // const smallText = switchLanguage(
  //   lang,
  //   "AuthenticationScreenEnterPhoneNumberText"
  // );

    return (
      <View style={styles.container}>
        {/*<View style={styles.trans}>*/}
        {/*  <Text style={styles.text1}>{bigText}</Text>*/}
        {/*  <GlobalLanguageButton lang={lang} onChangeLang={onChangeLang} />*/}
        {/*</View>*/}
        {/*<Text style={styles.text2}>{smallText}</Text>*/}
        <TextInput
          onChange={handleKeyup}
          placeholder={"0901234567"}
          style={styles.input}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => navigate("PinCode")}
          style={[styles.ellipse529, { backgroundColor: colors }]}
        >
          <View style={styles.ellipse531}>
            <AntDesign
              name={"arrowright"}
              size={28}
              color={colors}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );

}
