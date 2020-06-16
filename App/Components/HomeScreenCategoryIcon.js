import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import images from "../Images/images";
import styles from "./styles/HomeScreenCategoryIconStyle";

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

