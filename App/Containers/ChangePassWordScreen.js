import React, { useContext, useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity, Alert } from "react-native";
import ChangePasswordScreenHeader from "../Components/ChangePasswordScreenHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import InputNewPassword from "../Components/ChangePasswordScreenInputNewPassword";
import InputConfirmedPassword from "../Components/ChangePasswordScreenConfirmedPassword";
import { navigate } from "../Navigation/RootNavigation";
import { LanguageContext } from "../Providers/LanguageProvider";
import styles from "../Components/styles/ChangePassWordScreenStyle";
import { AuthContext } from "../Providers/AuthProvider";

export default function ChangePassWordScreen(style = styles.viewBlock2) {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFulfill, setFulfill] = useState(false);
  const authContext = useContext(AuthContext);
  const { changePassword } = authContext;

  const onSuccess = response => {
    const status = response.status;
    if (status === true) {
      console.log("SUCCESS CHANGE PASSWORD", status);
      navigate("LoginScreen");
    } else {
      Alert.alert("PASSWORD HAS NOT CHANGE");
    }
  };

  const onFailed = () => {};

  const changeNewPassword = (password) => {
      try {
          (async function() {
              await changePassword(password, onSuccess, onFailed);
          })();
      } catch (e) {

      }
  };

  useEffect(() => {
      if (password === confirmPassword && confirmPassword.length >= 6) {
          changeNewPassword(password);
      }
  }, [password, confirmPassword]);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <ChangePasswordScreenHeader />
      <View style={style}>
        <Text style={styles.textblock2box1}>
          {content.ChangePasswordScreenInputNewPassword}
        </Text>
        <View style={styles.viewBlock2box1}>
          <InputNewPassword
            password={password}
            onPasswordChange={(text) => {
                setPassword(text);
                if (text.length === 6) {
                    setFulfill(true);
                }
            }}
          />
        </View>
        {isFulfill ? (
          <View>
            <Text style={styles.textblock2box2}>
              {content.CurrentPasswordScreenConfirmNewPassword}
            </Text>
            <View style={styles.viewBlock2box2}>
              <InputConfirmedPassword
                confirmPassword={confirmPassword}
                onConfirmPasswordChange={(text)=>{
                    setConfirmPassword(text);
                }}
              />
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 26
        }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            padding: 5
          }}
          onPress={() => navigate("CurrentPasswordScreen")}>
          <AntDesign
            name={"left"}
            size={20}
            color={"gray"}
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10
            }}
          />
          <Text style={styles.goBackButton}>{content.GobackButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
