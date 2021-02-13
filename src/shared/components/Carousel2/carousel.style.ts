import { Dimensions, StyleSheet } from 'react-native';
const MAX_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        height: 500,
        width: MAX_WIDTH,
    },
    textStyle: {
        position: 'absolute',
        bottom: 50,
        margin: 10,
        left: 5
    },
    container: {
        flexDirection: 'row',
    },
    indicatorContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: MAX_WIDTH,
        bottom: 10,
        zIndex: 2,
    },
    indicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    activeIndicator: {
        backgroundColor: 'white',
    },
});