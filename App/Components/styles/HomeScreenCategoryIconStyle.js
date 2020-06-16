import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
    container: {
        marginTop: -50,
        flexDirection: "row"
    },
    category: {
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center"
    },
    text: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 16,
        letterSpacing: 0,
        textAlign: "center",
        color: colors.greyishBrown
    }
});

export default styles;
