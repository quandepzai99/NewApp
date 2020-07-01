import React, { useContext } from "react";
import { View, StatusBar } from "react-native";
import OTPScreenHeader from "../Components/OTPScreenHeader";
import InputOTP from "../Components/OTPScreenInputOTP";
import GlobalChatPopUpIcon from "../Components/GlobalChatPopUpIcon";
import { AuthContext } from "../Providers/AuthProvider";

export default function OTPScreen(props) {
  const { route } = props;
  const { params } = route;
  // const { phone } = params;

  const authContext = useContext(AuthContext);
  const { phone } = authContext.state;

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <OTPScreenHeader />
      <InputOTP phone={phone} />
      <GlobalChatPopUpIcon />
    </View>
  );
}
