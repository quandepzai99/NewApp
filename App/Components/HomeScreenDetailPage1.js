import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import images from "../Images/images";
import { navigationRef } from "../Navigation/RootNavigation";
import styles from "./styles/HomeScreenDetailPageStyle";
function navigation(name, id) {
  navigationRef.current && navigationRef.current.navigate(name, id);
}

export default class HomeScreenDetailPage1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.detail} />
        <TouchableOpacity
          style={styles.ellipse}
          onPress={() => navigation("Home")}>
          <FontAwesome name={"angle-left"} size={24} color={"#000"} />
        </TouchableOpacity>
        <Text style={styles.title}>Something title here</Text>
        <Text style={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    );
  }
}
