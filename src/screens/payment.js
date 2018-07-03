import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/payment';
import HeaderView from '../components/HeaderView_Cart';
import { Card, List } from 'native-base';

export default class Payment extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ececec' }}>
                <HeaderView
                    title='PAYMENT'
                    onPressMenu={() => {alert('onPressMenu')}}
                />

            </View >
        )
    }
}