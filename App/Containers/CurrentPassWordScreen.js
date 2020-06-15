import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import HeaderCurrentPassword from "../Components/HeaderCurrentPassword";
import StyleHeaderCurrentPassword from "../Components/styles/CurrentPasswordStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import PinInputCurrent from "../Components/PinInputCurrent";
// import { navigationRef } from "../RootNavigation";

// function navigate(name) {
//   navigationRef.current && navigationRef.current.navigate(name);
// }

export default function CurrentPassWordScreen() {
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeaderCurrentPassword />
      <View style={StyleHeaderCurrentPassword.viewBlock2}>
        <Text style={StyleHeaderCurrentPassword.textblock2box1}>
          Nhập mật khẩu hiện tại
        </Text>
        <View style={StyleHeaderCurrentPassword.viewBlock2box1}>
          <PinInputCurrent />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 26
        }}
        // onPress={() => navigate("PinCode")}
      >
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
        <Text style={StyleHeaderCurrentPassword.goBackButton}> Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
}
