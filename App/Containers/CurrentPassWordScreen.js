import React, { useContext } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import HeaderCurrentPassword from "../Components/CurrentPasswordScreenHeader";
import StyleHeaderCurrentPassword from "../Components/styles/CurrentPasswordStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import PinInputCurrent from "../Components/CurrentPasswordScreenPinInput";
import { navigate } from "../Navigation/RootNavigation";
import { LanguageContext } from "../Providers/LanguageProvider";

export default function CurrentPassWordScreen() {
  const languageContext = useContext(LanguageContext);
  const { content } = languageContext.state;
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeaderCurrentPassword />
      <View style={StyleHeaderCurrentPassword.viewBlock2}>
        <Text style={StyleHeaderCurrentPassword.textblock2box1}>
          {content.CurrentPasswordScreenInputPassword}
        </Text>
        <View style={StyleHeaderCurrentPassword.viewBlock2box1}>
          <PinInputCurrent />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 26
          }}
          onPress={() => navigate("PasswordScreen")}>
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
          <Text style={StyleHeaderCurrentPassword.goBackButton}>
            {content.GobackButton}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
