import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, Image } from 'react-native';
import { BoxShadow } from 'react-native-shadow'
var { width } = Dimensions.get('window');

export default class HeaderView extends Component {
    render() {
        const shadowOpt = {
            width: width,
            height: 40,
            color:"#000",
            borderColor: '#000',
            border:10,
            opacity:0.3,
            x:0,
            y:-5,
        }
        return (
            <BoxShadow setting={shadowOpt} >
                <View style={styles.HeaderView}>
                    <View style={styles.leftHeaderView} >
                        <TouchableOpacity
                            onPress = {this.props.onPressMenu}    
                        >
                            <Image
                                resizeMode='cover'
                                source={require('../assets/icons/menu.png')}
                                style={{ width: 26, height: 16 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleHeaderView} >
                        <Text
                            style={styles.titleFont}
                        >
                            {this.props.title}
                        </Text>
                    </View>
                    <View style={styles.RightHeaderView} >
                        <TouchableOpacity
                            onPress = {this.props.onPressSearch}
                        >
                            <Image
                                resizeMode='cover'
                                source={require('../assets/icons/search.png')}
                                style={{ width: 16, height: 16 }}
                            />
                        </TouchableOpacity>
                        <View style={{ width: 10 }} />
                        <TouchableOpacity
                            onPress = {this.props.onPressBasket}
                        >
                            <Image
                                resizeMode='cover'
                                source={require('../assets/icons/basket.png')}
                                style={{ width: 16, height: 16 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </BoxShadow>
        )
    }
}

const styles = StyleSheet.create({
    HeaderView: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 0,
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
