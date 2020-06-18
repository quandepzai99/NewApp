import React from "react";
import { StyleSheet, View } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import colors from "../Themes/Colors";
export default class PinInput extends React.Component {
  state = {
    code: "",
    password: ""
  };

  render() {
    const { password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <SmoothPinCodeInput
            password
            mask=<View
              style={{
                width: 20,
                height: 20,
                borderRadius: 34,
                backgroundColor: "rgb(114, 13, 93)"
              }}
            />
            cellStyleFocused={{
              borderColor: colors.blueGrey
            }}
            cellSize={28}
            codeLength={6}
            value={password}
            onTextChange={this.onTextChange}
            cellStyle={styles.cellStyle}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }

  onTextChange = text => {
    const { onFulfill } = this.props;
    const callback = text.length >= 6 ? onFulfill : () => {};
    this.setState(
      {
        password: text
      },
      callback
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderColor: "rgb(230,236,240)",
    borderWidth: 1
  },
  section: {
    alignItems: "center",
    margin: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  cellStyle: {
    borderRadius: 24,
    borderColor: colors.paleGreyFour,
    borderWidth: 1,
    marginLeft: 12
  }
});
