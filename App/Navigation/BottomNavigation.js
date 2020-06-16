import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Containers/HomeScreen";
import { Image, Text, View, StyleSheet } from "react-native";
import images from "../Images/images";

const Tab = createBottomTabNavigator();
function Voucher() {
  return (
    <View style={styles.itemContent}>
      <Text>Voucher</Text>
    </View>
  );
}
function Wallet() {
  return (
    <View style={styles.itemContent}>
      <Text>Wallet</Text>
    </View>
  );
}
function Account() {
  return (
    <View style={styles.itemContent}>
      <Text>Account</Text>
    </View>
  );
}
export default function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({}) => <Image source={images.iconHome} />
        }}
      />
      <Tab.Screen
        name={"Voucher"}
        component={Voucher}
        options={{
          tabBarLabel: "Voucher",
          tabBarIcon: ({}) => <Image source={images.iconVoucher} />
        }}
      />
      <Tab.Screen
        name={"Wallet"}
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({}) => <Image source={images.iconWallet} />
        }}
      />
      <Tab.Screen
        name={"Account"}
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({}) => <Image source={images.iconUser} />
        }}
      />
    </Tab.Navigator>
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
