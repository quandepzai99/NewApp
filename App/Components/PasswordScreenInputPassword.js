import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../Themes/Colors";
import images from "../Images/images";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { navigationRef } from "../Navigation/RootNavigation";
import styles from "./styles/PasswordScreenInputPasswordStyle";

function navigation(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default class PasswordScreenInputPassword extends Component {
  state = {
    code: "",
    password: ""
  };

  PinInput = React.createRef();

  render() {
    const { code } = this.state;
    const navigate = code.length >= 6 ? navigation("Home") : null;
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Nhập mật khẩu</Text>
        <SmoothPinCodeInput
          cellStyle={{
            borderWidth: 1,
            borderRadius: 24,
            width: 28,
            height: 28,
            borderColor: colors.paleGreyFour,
            backgroundColor: "#fff",
            marginTop: 36,
            marginLeft: 16
          }}
          mask={
            <View
              style={{
                width: 17,
                height: 17,
                borderRadius: 25,
                backgroundColor: colors.velvet
              }}
            />
          }
          textStyle={{
            fontSize: 20,
            color: colors.velvet
          }}
          textStyleFocused={{
            color: "red"
          }}
          cellStyleFocused={{
            borderColor: colors.blueGrey
          }}
          value={code}
          maskDelay={500}
          password={true}
          autoFocus={true}
          codeLength={6}
          onTextChange={code => this.setState({ code })}
        />
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation("PinCode1")}
            style={{ paddingTop: 10, paddingBottom: 10 }}>
            <Text style={styles.text2}>Bạn quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btSignOut}
            onPress={() => navigation("Telephone")}>
            <Image source={images.icon_signout} style={{ top: 3, right: 5 }} />
            <Text style={styles.text3}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text4}>Xác định khuôn mặt</Text>
        </View>
      </View>
    );
  }
}
