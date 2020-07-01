import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import colors from "../Themes/Colors";
import images from "../Images/images";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigate } from "../Navigation/RootNavigation";
import styles from "./styles/PasswordScreenInputPasswordStyle";
import { LanguageContext } from "../Providers/LanguageProvider";
import { AuthContext } from "../Providers/AuthProvider";

export default function PasswordScreenInputPassword() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { isPasswordCorrect } = authContext;
  const { phone } = authContext.state;
  const isFullFill = text => {
    isPasswordCorrect(phone, text, onSuccess, onFailed);
  };
  const { logOut } = authContext;
  const onPress = () => {
    logOut();
    navigate("LoginScreen");
  };
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
        onTextChange={setPassword}
        value={password}
        maskDelay={500}
        password={true}
        autoFocus={true}
        codeLength={6}
        onFulfill={isFullFill}
      />
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() => navigate("CurrentPasswordScreen")}
          style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Text style={styles.text2}>
            {content.PasswordScreenForgotPassword}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btSignOut} onPress={onPress}>
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

// const onSuccess = is_authenticated => {
//   if (is_authenticated) {
//     navigate("HomeScreen");
//   } else {
//     Alert.alert("Mật khẩu không chính xác");
//   }
// };
const onSuccess = is_authenticated => {
  if (is_authenticated) {
    navigate("HomeScreen");
  } else {
    Alert.alert("sai mat khau");
  }
};

const onFailed = () => {};
