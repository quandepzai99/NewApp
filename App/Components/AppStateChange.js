import React, { useEffect, useState } from "react";
import { AppState } from "react-native";
import { AuthActions } from "../ReduxHooks/AuthActions";

export default function AppState() {
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
    }
    setAppState(nextAppState);
  };
  console.log("STATEEEE", appState);

  return () => {
    AppState.removeEventListener("change", handleAppStateChange);
  };
}
console.log("Stateeeee", appState);
