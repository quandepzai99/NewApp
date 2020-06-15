import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import HeaderChangePassWord from "../Components/HeaderChangePassWord";
// import styles from "./Components/StyleSheet";
import AntDesign from "react-native-vector-icons/AntDesign";
// import PinInput from "./Components/pin-input";
// import { navigationRef } from "../RootNavigation";

// function navigate(name) {
//   navigationRef.current && navigationRef.current.navigate(name);
// }

export default function ChangePassWordScreen() {
  const [isShow, setIsHidden] = useState(false);

  console.log("Is Hidden:", isShow);
  console.log("Set Hidden:", setIsHidden);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeaderChangePassWord />
      {/*<View style={styles.viewBlock2}>*/}
      {/*  <Text style={styles.textblock2box1}>Mật khẩu mới</Text>*/}
      {/*  <View style={styles.viewBlock2box1}>*/}
      {/*    <PinInput*/}
      {/*      onFulfill={() => {*/}
      {/*        setIsHidden(true);*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </View>*/}
      {/*  {isShow ? (*/}
      {/*    <>*/}
      {/*      <Text style={styles.textblock2box2}>Xác nhận mật khẩu</Text>*/}
      {/*      <View style={styles.viewBlock2box2}>*/}
      {/*        <PinInput onFulfill={() => {}} />*/}
      {/*      </View>*/}
      {/*    </>*/}
      {/*  ) : (*/}
      {/*    <View />*/}
      {/*  )}*/}
      {/*</View>*/}
      {/*<TouchableOpacity*/}
      {/*  style={{*/}
      {/*    flexDirection: "row",*/}
      {/*    justifyContent: "center",*/}
      {/*    marginTop: 26*/}
      {/*  }}*/}
      {/*  onPress={() => navigate("PinCode1")}>*/}
      {/*  <AntDesign*/}
      {/*    name={"left"}*/}
      {/*    size={15}*/}
      {/*    color={"gray"}*/}
      {/*    style={{*/}
      {/*      paddingTop: 10,*/}
      {/*      paddingBottom: 10,*/}
      {/*      paddingLeft: 10*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Text style={styles.goBackButton}> Quay lại</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
}
