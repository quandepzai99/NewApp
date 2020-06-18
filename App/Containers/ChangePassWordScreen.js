import React, { useContext, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import ChangePasswordScreenHeader from "../Components/ChangePasswordScreenHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import PasswordScreenInputPassword from "../Components/ChangePasswordScreenPinInput";
import { navigationRef } from "../Navigation/RootNavigation";
import { LanguageContext } from "../Providers/LanguageProvider";
import styles from "../Components/styles/ChangePassWordScreenStyle";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function ChangePassWordScreen() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFulfill, setFulfill] = useState(false);
  const [isFulfillConfirmPassword, setFulfillConfirmPassword] = useState(false);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <ChangePasswordScreenHeader />
      <View style={styles.viewBlock2}>
        <Text style={styles.textblock2box1}>
          {content.ChangePasswordScreenInputNewPassword}
        </Text>
        <View style={styles.viewBlock2box1}>
          <PasswordScreenInputPassword
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
              <PasswordScreenInputPassword
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
        onPress={() => navigate("PinCode1")}>
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
