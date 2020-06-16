import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
    container: {
        top: 15,
    },
    scrollStyle: {
        marginTop: 20,
        shadowColor: "rgba(22, 60, 132, 0.16)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        alignItems: "center",
        marginLeft: 16
    },
    logo_icon: {
        width: 72,
        height: 72,
        borderRadius: 38,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        top: -5,
        shadowColor: "rgba(22, 60, 132, 0.1)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        position: "absolute"
    },
    HeaderFavoriteBrand: {
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 26,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.velvet,
        marginLeft: 16
    },
    icon_name: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 16
    }
});

export default styles;
