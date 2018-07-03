import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentView: {
        flex: 1,
        margin: 10,
        backgroundColor: 'transparent',
    },
    cartSubView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    font1: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        fontWeight: '500',
        color: 'black',
    },
    font2: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        color: 'black',
    },
    font3: {
        fontSize: 10,
        fontFamily: 'MyriadPro-Regular',
        color: 'black',
    },
    line: {
        height: 1,
        backgroundColor: '#d7d7d7'
    },
    spin: {
        flexDirection: 'row'
    },
    spinLeft: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        borderRadius: 0
    },
    spinText: {
        fontSize: 20,
        fontFamily: 'MyriadPro-Regular',
        color: 'black'
    },
    spinValueText: {
        fontSize: 16,
        fontFamily: 'MyriadPro-Regular',
        color: 'white'
    },
    EditMeal: {
        borderColor: '#02abb1',
        width: 60,
        height: 20,
        justifyContent: 'center',
        marginLeft: 5,
    },
    EditMealText: {
        fontSize: 10,
        fontFamily: 'MyriadPro-Regular',
        color: '#02abb1'
    },
    CheckoutButton: {
        width: '100%',
        height: 30,
        backgroundColor: '#f15a2c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CheckoutText: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        color: 'white', 
    }
})