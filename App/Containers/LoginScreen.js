import React, { Component, useContext } from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import LoginScreenInputPhoneNumber from "../Components/LoginScreenInputPhoneNumber";
import LoginScreenHeader from "../Components/LoginScreenHeader";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { LanguageContext } from "../Providers/LanguageProvider";
import { ThemeContext } from "../Providers/ThemeProvider";


const onChangeTheme = (dispatch, type, theme) => {
  dispatch({
    type: type,
    payload: theme
  });
};

function LoginScreen() {
  const languageContext = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  const { language } = languageContext.state;
  const { setTheme, state } = themeContext;
  const { theme } = state;


  const content = theme === "light" ? "light-content" : "dark-content";
  const newTheme = theme === "light" ? "dark" : "light";

  return (
    <View>
      <StatusBar
        barStyle={content}
        translucent={true}
        backgroundColor={"transparent"}
      />
      <LoginScreenHeader lang={language} />
      <LoginScreenInputPhoneNumber lang={language} />
      <TouchableOpacity
        onPress={() => {
          setTheme(newTheme);
        }}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <GlobalChatPopUpIcon />
    </View>
  );
}

export default LoginScreen;
