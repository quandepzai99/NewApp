import React, { Component } from "react";
import { View, Text } from "react-native";
import CurrentPassWordScreen from "./CurrentPassWordScreen";

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
export default function App() {
  return (
    <View>
      <CurrentPassWordScreen />
    </View>
  );
}
