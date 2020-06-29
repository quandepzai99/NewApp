import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import colors from '../Themes/Colors';
import styles from './styles/OTPScreenInputOTPStyle';

export default function InputOTP() {
    return (
        <View style={styles.container}>
            <View style={styles.InputOTP}>
                <SmoothPinCodeInput
                    cellStyle={styles.cellStyle}
                    codeLength={6}
                    placeholder={'0'}
                    cellStyleFocused={{borderColor: colors.velvet}}
                    autoFocus={true}
                />
            </View>
            <View/>
        </View>
    );
}
