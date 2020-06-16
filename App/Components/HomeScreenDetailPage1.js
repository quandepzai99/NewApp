import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import images from "../Images/images";
import colors from "../Themes/colors";
import {navigationRef} from "../Navigation/RootNavigation";

function navigation(name,id) {
  navigationRef.current && navigationRef.current.navigate(name, id);
}

export default class HomeScreenDetailPage1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.detail} />
        <TouchableOpacity style={styles.ellipse} onPress={() => navigation('Home')}>
          <FontAwesome name={'angle-left'} size={24} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.title}>Something title here</Text>
        <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ellipse: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      top: 20,
      left: 10,
      borderRadius: 10,
      opacity: 0.1,
      backgroundColor: "#380606",
      position: 'absolute'
    },
  title: {
    fontSize: 20,
    padding: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.greyishBrown
  },
  desc: {
    fontSize: 15,
    paddingLeft: 16,
    paddingRight: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.greyishBrown
  }
})

