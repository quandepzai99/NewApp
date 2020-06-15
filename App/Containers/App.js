import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SafeAreaView>
      <Text>Hi Veiler</Text>
    </SafeAreaView>;
  }
}

export default App;
