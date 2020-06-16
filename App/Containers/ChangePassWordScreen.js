import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import HeaderChangePassWord from "../Components/HeaderChangePassWord";
import AntDesign from "react-native-vector-icons/AntDesign";
import PinInputChange from "../Components/PinInputChange";
import ChangePassWordStyle from "../Components/styles/ChangePassWordStyle";
import { navigationRef } from "../Navigation/RootNavigation";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default function ChangePassWordScreen() {
  const [isShow, setIsHidden] = useState(false);

  console.log("Is Hidden:", isShow);
  console.log("Set Hidden:", setIsHidden);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeaderChangePassWord />
      <View style={ChangePassWordStyle.viewBlock2}>
        <Text style={ChangePassWordStyle.textblock2box1}>Mật khẩu mới</Text>
        <View style={ChangePassWordStyle.viewBlock2box1}>
          <PinInputChange
            onFulfill={() => {
              setIsHidden(true);
            }}
          />
        </View>
        {isShow ? (
          <>
            <Text style={ChangePassWordStyle.textblock2box2}>
              Xác nhận mật khẩu
            </Text>
            <View style={ChangePassWordStyle.viewBlock2box2}>
              <PinInputChange onFulfill={() => {}} />
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
          size={15}
          color={"gray"}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10
          }}
        />
        <Text style={ChangePassWordStyle.goBackButton}> Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
}
