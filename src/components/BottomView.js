import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { BoxShadow } from 'react-native-shadow'
var { width } = Dimensions.get('window');

export default class BottomView extends Component {
    render() {
        const shadowOpt = {
            width: width,
            height: 0,
            color:"#000",
            borderColor: '#000',
            border:20,
            opacity:0.1,
            x:0,
            y:10,
        }
        return (
            <View>
                <BoxShadow setting={shadowOpt} >
                </BoxShadow>
                <View style={styles.BottomView}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BottomView: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
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
})
