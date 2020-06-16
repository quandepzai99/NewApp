import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderColor: "rgb(230,236,240)",
        borderWidth: 1
    },
    section: {
        alignItems: "center",
        margin: 16
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    cellStyle: {
        borderRadius: 24,
        borderColor: colors.paleGreyFour,
        borderWidth: 1,
        marginLeft: 12
    }
});

export default styles;
