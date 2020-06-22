import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CurrentPassWordScreen from "../Containers/CurrentPassWordScreen";
import PasswordScreen from "../Containers/PasswordScreen";
import ChangePasswordScreen from "../Containers/ChangePassWordScreen";
import LoginScreen from "../Containers/LoginScreen";
import BottomNavigation from "../Navigation/BottomNavigation";
import HomeScreenDetailPage1 from "../Components/HomeScreenDetailPage1";


const Stack = createStackNavigator();

function AppNavigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/*<Stack.Screen name={"Telephone"} component={LoginScreen} />*/}
        <Stack.Screen name={"PinCode"} component={PasswordScreen} />
        <Stack.Screen name={"PinCode1"} component={CurrentPassWordScreen} />
        <Stack.Screen name={"PinCode2"} component={ChangePasswordScreen} />
        {/*<Stack.Screen name={"Chats"} component={Inbox} />*/}
        <Stack.Screen name={"Home"} component={BottomNavigation} />
        <Stack.Screen name={"Page1"} component={HomeScreenDetailPage1} />
        <Stack.Screen name={"Page2"} component={HomeScreenDetailPage1} />
        <Stack.Screen name={"Page3"} component={HomeScreenDetailPage1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
