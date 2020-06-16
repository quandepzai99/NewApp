import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import images from "../Images/images";
import colors from "../Themes/colors";

export default class HomeScreenCategoryIcon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.category}>
          <Image source={images.icon4} />
          <Text style={styles.text}>Demo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={images.icon3} />
          <Text style={styles.text}>Xem phim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={images.icon2} />
          <Text style={styles.text}>Ăn uống</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={images.icon1} />
          <Text style={styles.text}>Du lịch và nghỉ dưỡng</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flexDirection: "row"
  },
  category: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center"
  },
  text: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.greyishBrown
  }
});
