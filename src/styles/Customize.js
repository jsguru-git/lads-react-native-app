import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentView: {
        flex: 1,
        margin: 10,
        backgroundColor: '#f7f8f8',
    },
    img: {
        width: '100%',
        height: 200,
        padding: 10,
    },
    closeIcon: {
        fontSize: 30,
        color: 'white',
    },
    titleView: {
        height: 100,
        width: '100%',
        padding: 20,
        flexDirection: 'row',
    },
    subTitleView1: {
        flex: 1
    },
    subTitleView2: {
        width: 150,
        alignItems: 'flex-end'
    },
    itemTitle2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    font1: {
        fontSize: 16,
        fontFamily: 'MyriadPro-Regular',
        fontWeight: '500',
        color: 'black',
        marginBottom: 5
    },
    font2: {
        fontSize: 10,
        fontFamily: 'MyriadPro-Regular',
        color: 'black'
    },
    font3: {
        fontSize: 16,
        fontFamily: 'MyriadPro-Regular',
        fontWeight: '500',
        color: 'black',
    },
    spin: {
        flexDirection: 'row'
    },
    spinLeft: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        borderRadius: 0
    },
    spinText: {
        fontSize: 24,
        fontFamily: 'MyriadPro-Regular',
        color: 'black'
    },
    spinValueText: {
        fontSize: 20,
        fontFamily: 'MyriadPro-Regular',
        color: 'white'
    },
    mealView: {
        flexDirection: 'row',
    },
    mealButtonSelected: {
        backgroundColor: '#707070',
        borderRadius: 0,
        height: 20,
        justifyContent: 'center',
        flex: 0.5
    },
    mealButtonUnselected: {
        backgroundColor: 'black',
        borderRadius: 0,
        height: 20,
        justifyContent: 'center',
        flex: 0.5
    },
    mealText: {
        fontSize: 12,
        fontFamily: 'MyriadPro-Regular',
        color: 'white',
        fontWeight: '500'        
    },
    comboView: {
        flex: 1,
        padding: 20
    },
    subComboView: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black',
        marginTop: 5,
    },
    subComboView1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    comboText: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        color: '#282827',
    },
    comboText_bold: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        color: '#282827',
        fontWeight: '500'
    },
    buttonAddCart: {
        backgroundColor: '#f15a2c',
        height: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})