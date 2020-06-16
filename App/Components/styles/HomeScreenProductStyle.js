import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: "left",
        color: colors.velvet,
        justifyContent: "center"
    },
    itemProduct: {
        justifyContent: "space-between",
        top: 10,
        width: (180 / 414) * Dimensions.get("screen").width,
        height: (264 / 736) * Dimensions.get("screen").height,
        paddingTop: 17,
        marginLeft: 16,
        borderRadius: 12,
        backgroundColor: "white",
        shadowColor: "rgba(22, 60, 132, 0.16)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 5
    },
    desc: {
        fontSize: (15 / 736) * Dimensions.get("screen").height,
        lineHeight: (18 / 736) * Dimensions.get("screen").height,
        letterSpacing: 0,
        paddingTop: 20,
        paddingLeft: 10,
        textAlign: "left",
        justifyContent: "center",
        color: colors.greyishBrown
    },
    price: {
        alignItems: "center",
        fontSize: 17,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 17,
        paddingLeft: 12,
        paddingTop: 15,
        color: colors.velvet
    },
    xemTtC: {
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        color: colors.deepSkyBlue,
        textAlign: "center"
    },
    box: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    plus: {
        padding: 13,
        backgroundColor: colors.tangerine,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12
    }
});

export default styles;
