import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import CurrentPassWordScreen from "./CurrentPassWordScreen";

import { navigationRef } from "../Navigation/RootNavigation";

// const navigationRef = React.createRef();

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={"Telephone"} component={LoginScreen} />
          {/*<Stack.Screen name={"PinCode"} component={PasswordScreen} />*/}
          {/*<Stack.Screen name={"PinCode1"} component={CurrentPassWordScreen} />*/}
          {/*<Stack.Screen name={"PinCode2"} component={ChangePassword} />*/}
          {/*<Stack.Screen name={"Chats"} component={Inbox} />*/}
          {/*<Stack.Screen name={"Home"} component={Bottom} />*/}
          {/*<Stack.Screen name={"Page1"} component={Page1} />*/}
          {/*<Stack.Screen name={"Page2"} component={Page2} />*/}
          {/*<Stack.Screen name={"Page3"} component={Page3} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
