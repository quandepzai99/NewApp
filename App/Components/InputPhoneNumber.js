import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import colors from "../Themes/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import LanguageButton from "./LanguageButton";
import { navigationRef } from "../Navigation/RootNavigation";
import switchLanguage from "../I18n/selector";
import styles from "./styles/LoginScreenInputPhoneNumberStyle"

// const navigationRef = React.createRef();

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default class InputPhoneNumber extends Component {
  colorButton = ["#fff"];
  constructor(props) {
    super(props);
    this.state = {
      Reds: colors.blueGrey
    };
  }

  handleKeyup = event => {
    // console.log(event.nativeEvent.text)
    let colors = event.nativeEvent.text;
    if (colors.length > 0) {
      this.setState({
        Reds: "rgb(114, 13, 93)"
      });
    } else {
      this.setState({
        Reds: colors.blueGrey
      });
    }
  };

  render() {
    const { lang, onChangeLang } = this.props;

    const bigText = switchLanguage(lang, "AuthenticationScreenPhoneText");
    const smallText = switchLanguage(
      lang,
      "AuthenticationScreenEnterPhoneNumberText"
    );

    return (
      <View style={styles.container}>
        <View style={styles.trans}>
          <Text style={styles.text1}>{bigText}</Text>
          <LanguageButton lang={lang} onChangeLang={onChangeLang} />
        </View>
        <Text style={styles.text2}>{smallText}</Text>
        <TextInput
          onChange={this.handleKeyup}
          placeholder={"0901234567"}
          style={styles.input}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => navigate("PinCode")}
          style={[styles.ellipse529, { backgroundColor: this.state.Reds }]}>
          <View style={styles.ellipse531}>
            <AntDesign
              name={"arrowright"}
              size={28}
              color={this.state.Reds}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

