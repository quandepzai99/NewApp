import React, { useEffect, useState } from "react";
import { AppState } from "react-native";
import { AuthActions } from "../ReduxHooks/AuthActions";

export default function AppState() {
  const [appState, setAppState] = useState(AppState.currentState);
  console.log("STATEEEE", appState);
  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
    }
    setAppState(nextAppState);
  };
  return;
  appState;
}
console.log("Stateeeee", appState);
