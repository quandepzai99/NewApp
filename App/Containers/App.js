import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import CurrentPassWordScreen from "./CurrentPassWordScreen";
import ChangePassWordScreen from "./ChangePassWordScreen";
import BottomNavigation from "../Navigation/BottomNavigation";
import PasswordScreen from "./PasswordScreen";
import HomeScreenDetailPage1 from "../Components/HomeScreenDetailPage1"
import HomeScreenDetailPage2 from "../Components/HomeScreenDetailPage2"
import HomeScreenDetailPage3 from "../Components/HomeScreenDetailPage3"

import { navigationRef } from "../Navigation/RootNavigation";

// const navigationRef = React.createRef();

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={"Telephone"} component={LoginScreen} />
          <Stack.Screen name={"PinCode"} component={PasswordScreen} />
          <Stack.Screen name={"PinCode1"} component={CurrentPassWordScreen} />
          <Stack.Screen name={"PinCode2"} component={ChangePassWordScreen} />
          {/*<Stack.Screen name={"Chats"} component={Inbox} />*/}
          <Stack.Screen name={"Home"} component={BottomNavigation} />
          <Stack.Screen name={"Page1"} component={HomeScreenDetailPage1} />
          <Stack.Screen name={"Page2"} component={HomeScreenDetailPage2} />
          <Stack.Screen name={"Page3"} component={HomeScreenDetailPage3} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
