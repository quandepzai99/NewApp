import React, { useContext, useState } from "react";
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import colors from "../Themes/Colors";
import images from "../Images/images";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./styles/PasswordScreenInputPasswordStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import {PassContext, PassProvider} from '../Providers/PassProvider';


export default function PasswordScreenInputPassword() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [code, setCode] = useState("");
  const passContext = useContext(PassContext);
  const {isPasswordExist} = passContext;
  const TextCode = {isPasswordExist, code}

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{content.PasswordScreenInputPassword}</Text>
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
        onFulfill={() => TextCode}
      />
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => navigate("PinCode1")}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={styles.text2}>
            {content.PasswordScreenForgotPassword}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btSignOut}
          onPress={() => navigate("Telephone")}>
          <Image source={images.icon_signout} style={{ top: 3, right: 5 }} />
          <Text style={styles.text3}>{content.PasswordScreenSignOut}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text4}>{content.PasswordScreenFaceID}</Text>
      </View>
    </View>
  );
}

const getOnPress = (isActive, isPhoneNumberExist, phone) => {
  return isActive
    ? () => {
      console.log("IS EXIST:", phone);
      isPhoneNumberExist(phone, onSuccess, onFailed);
    }
    : () => {};
};

const onSuccess = isExist => {
  if (isExist) {
    navigate("Home");
  } else {
    Alert.alert("So dien thoai nay chua ton tai");
  }
};

const onFailed = () => {};
