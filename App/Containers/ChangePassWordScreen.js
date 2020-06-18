import React, { useContext, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import ChangePasswordScreenHeader from "../Components/ChangePasswordScreenHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import PasswordScreenInputPassword from "../Components/ChangePasswordScreenPinInput";
import ChangePassWordStyle from "../Components/styles/ChangePassWordScreenStyle";
import { navigationRef } from "../Navigation/RootNavigation";
import { LanguageContext } from "../Providers/LanguageProvider";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function ChangePassWordScreen() {
  const [isShow, setIsHidden] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <ChangePasswordScreenHeader />
      <View style={ChangePassWordStyle.viewBlock2}>
        <Text style={ChangePassWordStyle.textblock2box1}>
          {content.ChangePasswordScreenInputNewPassword}
        </Text>
        <View style={ChangePassWordStyle.viewBlock2box1}>
          <PasswordScreenInputPassword
            onFulfill={() => {
              setIsHidden(true);
            }}
          />
        </View>
        {isShow ? (
          <>
            <Text style={ChangePassWordStyle.textblock2box2}>
              {content.CurrentPasswordScreenConfirmNewPassword}{" "}
            </Text>
            <View style={ChangePassWordStyle.viewBlock2box2}>
              <PasswordScreenInputPassword onFulfill={() => {}} />
            </View>
          </>
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
        <Text style={ChangePassWordStyle.goBackButton}>
          {content.GobackButton}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
