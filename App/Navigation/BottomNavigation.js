import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./HomeScreen";
import { Image, Text, View, StyleSheet } from "react-native";
// import images from "../Common/images";

const Tab = createBottomTabNavigator();
// function Voucher() {
//   return (
//     <View style={styles.itemContent}>
//       <Image source={images.icon_voucher} />
//       <Text>Voucher</Text>
//     </View>
//   );
// }
// function Wallet() {
//   return (
//     <View style={styles.itemContent}>
//       <Image source={images.icon_wallet} />
//       <Text>Wallet</Text>
//     </View>
//   );
// }
// function Account() {
//   return (
//     <View style={styles.itemContent}>
//       <Image source={images.icon_account} />
//       <Text>Account</Text>
//     </View>
//   );
// }
export default function Bottom() {
  return (
    <View><Text>123</Text></View>
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name={"Home"}
    //     component={HomeScreen}
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarIcon: ({}) => <Image source={images.icon_home} />
    //     }}
    //   />
    //   <Tab.Screen
    //     name={"Voucher"}
    //     component={Voucher}
    //     options={{
    //       tabBarLabel: "Voucher",
    //       tabBarIcon: ({}) => <Image source={images.icon_voucher} />
    //     }}
    //   />
    //   <Tab.Screen
    //     name={"Wallet"}
    //     component={Wallet}
    //     options={{
    //       tabBarLabel: "Wallet",
    //       tabBarIcon: ({}) => <Image source={images.icon_wallet} />
    //     }}
    //   />
    //   <Tab.Screen
    //     name={"Account"}
    //     component={Account}
    //     options={{
    //       tabBarLabel: "Account",
    //       tabBarIcon: ({}) => <Image source={images.icon_account} />
    //     }}
    //   />
    // </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  itemContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
