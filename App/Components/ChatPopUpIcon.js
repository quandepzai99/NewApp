import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from "../../../colors";
import images from "../../../Common/images";
import {navigationRef} from "../../RootNavigation";

function navigate(name) {
  navigationRef.current && navigationRef.current.navigate(name);
}

export default class ChatPopUpIcon extends Component {

  render() {
    return (
      <View style={{alignItems: 'flex-end', marginRight: 16}}>
        <TouchableOpacity style={styles.container} onPress={() => navigate('Chats')}>
          <View style={styles.ellipse608}>
            <Image source={images.chat} style={styles.chat}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -60,
    width: 76,
    height: 76,
    borderRadius: 40,
    backgroundColor: "rgba(114, 13, 93, 0.1)",
  },

  ellipse608: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: colors.paleGreyFour
  },
  chat: {
    margin: 14
  }
})
