import React, { useContext, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Alert } from "react-native";
import ChangePasswordScreenHeader from "../Components/ChangePasswordScreenHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import InputNewPassword from "../Components/ChangePasswordScreenInputNewPassword";
import InputConfirmedPassword from "../Components/ChangePasswordScreenConfirmedPassword";
import { navigate } from "../Navigation/RootNavigation";
import { LanguageContext } from "../Providers/LanguageProvider";
import styles from "../Components/styles/ChangePassWordScreenStyle";
import { AuthContext } from "../Providers/AuthProvider";
import { LocalStorage } from "../Lib/LocalStorage";

export default function ChangePassWordScreen() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFulfill, setFulfill] = useState(false);
  const [isFulfillConfirmPassword, setFulfillConfirmPassword] = useState(false);
  const authContext = useContext(AuthContext);
  const { changePassword } = authContext;
  const changeNewPassword = confirmPassword => {
    changePassword(password, confirmPassword, onSuccess);
    if ((password === confirmPassword) !== isFulfillConfirmPassword) {
      changeNewPassword;
      // console.log("Please enter current password", changeNewPassword);
    }
  };
  console.log("PASStren", password);
  console.log("PASSduoi", confirmPassword);
  // console.log('Change',password, confirmPassword, onSuccess );
  // console.log('FULLFILL duoi', changePassword);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <ChangePasswordScreenHeader />
      <View style={styles.viewBlock2}>
        <Text style={styles.textblock2box1}>
          {content.ChangePasswordScreenInputNewPassword}
        </Text>
        <View style={styles.viewBlock2box1}>
          <InputNewPassword
            isFulfill={isFulfill}
            setFulfill={setFulfill}
            password={password}
            setPassword={setPassword}
            changeNewPassword={changeNewPassword}
          />
        </View>
        {isFulfill ? (
          <View>
            <Text style={styles.textblock2box2}>
              {content.CurrentPasswordScreenConfirmNewPassword}
            </Text>
            <View style={styles.viewBlock2box2}>
              <InputConfirmedPassword
                isFulfillConfirmPassword={isFulfillConfirmPassword}
                setFulfillConfirmPassword={setFulfillConfirmPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                changeNewPassword={changeNewPassword}
              />
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 26
        }}
        onPress={() => navigate("CurrentPasswordScreen")}>
        <AntDesign
          name={"left"}
          size={20}
          color={"gray"}
          style={{
            paddingTop: 8,
            paddingBottom: 10,
            paddingLeft: 10
          }}
        />
        <Text style={styles.goBackButton}>{content.GobackButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const onSuccess = event => {
  if (event) {
    event.preventDefault();
    Alert.alert("Mật khẩu đã đc đổi");
    // navigate("HomeScreen");
  } else {
    Alert.alert("Mật khẩu không chính xác");
  }
};

const onFailed = () => {};
