import React, {useContext} from 'react';
import {View, Dimensions} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import colors from '../Themes/Colors';
import styles from './styles/OTPScreenInputOTPStyle';

export default function InputOTP() {
    return (
        <View style={styles.container}>
            <View style={styles.inputOTP}>
                <SmoothPinCodeInput
                    cellStyle={styles.cellStyle}
                    codeLength={6}
                    placeholder={'0'}
                    cellStyleFocused={{borderColor: colors.velvet}}
                    autoFocus={true}
                    textStyleFocused={{
                        fontSize: 32,
                        fontWeight: 'normal',
                        fontStyle: 'normal',
                        lineHeight: 38,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: colors.greyishBrown,
                    }}
                />
            </View>
            <View/>
        </View>
    );
}
