import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    HeaderView: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 0,
    },
    contentView: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleFont: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular'
    },
    leftHeaderView: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeaderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    RightHeaderView: {
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'MyriadPro-Semibold'
    }
})