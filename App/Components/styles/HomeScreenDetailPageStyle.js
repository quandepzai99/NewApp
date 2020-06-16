import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

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
});

export default styles;
