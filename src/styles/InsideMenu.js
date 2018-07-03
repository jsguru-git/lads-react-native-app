import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentView: {
        flex: 1,
        margin: 10,
        backgroundColor: '#ececec',
    },
    Bestseller: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
        paddingHorizontal: 10
    },
    iconView1: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon1: {
        color: '#f16939',
        fontSize: 10,
        marginRight: 5,
    },
    icon2: {
        color: '#03b6c0',
        fontSize: 10,
        marginRight: 5,
    },
    gridView: {
        flex: 1,
    },
    itemContainer: {
        overflow: 'hidden',
        borderRadius: 5,
        height: 200,
        backgroundColor: 'white'
    },
    detailView: {
        height: 50,
        margin: 5,
    },
    itemTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle1: {
        flexDirection: 'row',
        alignItems: 'center',
    },    
    itemTitle2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    font1: {
        fontSize: 14,
        fontFamily: 'MyriadPro-Regular',
        fontWeight: '500'
    },
    font2: {
        fontSize: 8,
        fontFamily: 'MyriadPro-Regular'
    }

})