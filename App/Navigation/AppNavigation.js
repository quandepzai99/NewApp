import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CurrentPassWordScreen from "../Containers/CurrentPassWordScreen";
import PasswordScreen from "../Containers/PasswordScreen";
import ChangePasswordScreen from "../Containers/ChangePassWordScreen";
import LoginScreen from "../Containers/LoginScreen";
import BottomNavigation from "../Navigation/BottomNavigation";
import HomeScreenDetailPage1 from "../Components/HomeScreenDetailPage1";
import OTPScreen from "../Containers/OTPScreen";

import { AppState } from "react-native";
import { navigationRef } from "../Navigation/RootNavigation";
import { LocalStorage } from "../Lib/LocalStorage";

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"OTPScreen"} component={OTPScreen} />
        <Stack.Screen name={"PasswordScreen"} component={PasswordScreen} />
        <Stack.Screen
          name={"CurrentPasswordScreen"}
          component={CurrentPassWordScreen}
        />
        <Stack.Screen
          name={"ChangePasswordScreen"}
          component={ChangePasswordScreen}
        />
        {/*<Stack.Screen name={"Chats"} component={Inbox} />*/}
        <Stack.Screen name={"HomeScreen"} component={BottomNavigation} />
        <Stack.Screen
          name={"HomeScreenDetailPage1"}
          component={HomeScreenDetailPage1}
        />
        <Stack.Screen
          name={"HomeScreenDetailPage2"}
          component={HomeScreenDetailPage1}
        />
        <Stack.Screen
          name={"HomeScreenDetailPage3"}
          component={HomeScreenDetailPage1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
