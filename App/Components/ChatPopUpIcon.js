import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from "./styles/LoginScreenChatPopUpIconStyle"
import images from "../Images/images";
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


