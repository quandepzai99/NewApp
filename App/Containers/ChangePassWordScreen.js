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

export default function ChangePassWordScreen() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFulfill, setFulfill] = useState(false);
  const [isFulfillConfirmPassword, setFulfillConfirmPassword] = useState(false);
  const authContext = useContext(AuthContext);
  const { changePassword } = authContext;
  const changeNewPassword = (confirmPassword, isFulfillConfirmPassword) => {
    changePassword(
      confirmPassword,
      isFulfillConfirmPassword,
      onSuccess,
      onFailed
    );
    console.log("PASStren", password);
    // console.log("PASSduoi", confirmPassword);
    // console.log("FULLFILL duoi", isFulfillConfirmPassword);
    console.log("FUNCTION");
    console.log("WOLOLO");
  };
  if ([password === confirmPassword][isFulfillConfirmPassword]) {
    changeNewPassword;
  }
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
          />
        </View>
        {isFulfill ? (
          <View>
            <Text style={styles.textblock2box2}>
              {content.CurrentPasswordScreenConfirmNewPassword}{" "}
            </Text>
            <View style={styles.viewBlock2box2}>
              <InputConfirmedPassword
                isFulfill={isFulfillConfirmPassword}
                setFulfill={setFulfillConfirmPassword}
                password={confirmPassword}
                setPassword={setConfirmPassword}
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

const onSuccess = () => {
  if ({}) {
    Alert.alert("Mật khẩu đã đc đổi");
    // navigate("HomeScreen");
  } else {
    Alert.alert("Mật khẩu không chính xác");
  }
};

const onFailed = () => {};
