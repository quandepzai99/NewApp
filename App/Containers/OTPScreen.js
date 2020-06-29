import React from 'react';
import {View, StatusBar} from 'react-native';
import OTPScreenHeader from '../Components/OTPScreenHeader';
import InputOTP from '../Components/OTPScreenInputOTP';
import GlobalChatPopUpIcon from '../Components/GlobalChatPopUpIcon';

export default function OTPScreen() {
    return (
        <View>
            <StatusBar barStyle={'light-content'}/>
            <OTPScreenHeader/>
            <InputOTP/>
            <GlobalChatPopUpIcon/>
        </View>
    );
}
