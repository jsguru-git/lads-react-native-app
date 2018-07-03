import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    HeaderView: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    contentView: {
        flex: 1,
        marginHorizontal: 15,
        marginBottom: 15
    },
    titleFont: {
        color: '#a9b6b7',
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular'
    },
    leftHeaderView: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHeaderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    RightHeaderView: {
        width: 40,
    },
    textView1: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputView1: {
        flex: 1,
    },
    font1: {
        fontSize: 14,
        color: 'white',
        alignItems: 'flex-end'
    },
    button: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        fontFamily: 'MyriadPro-Regular'
    }

})