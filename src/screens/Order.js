import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles/Order';
import { List } from 'native-base';
import HeaderView from '../components/HeaderView';

const orderArr = [
    {
        img: require('../../src/assets/images/breakfast.png'),
        name: 'BREAKFAST'
    },
    {
        img: require('../../src/assets/images/wanyu.png'),
        name: 'WAGYU BEEF BURGER'
    },
    {
        img: require('../../src/assets/images/chicken.png'),
        name: 'CHICKEN BURGER'
    },
    {
        img: require('../../src/assets/images/pasta.png'),
        name: 'PASTA'
    },
    {
        img: require('../../src/assets/images/dessert.png'),
        name: 'DESSERT'
    },
    {
        img: require('../../src/assets/images/milkshake.png'),
        name: 'MILKSHAKE'
    },
]

export default class Main extends Component {
    renderListView(rowData) {
        return (
            <ImageBackground source={rowData.img} style={{ width: '100%', height: 120, marginBottom: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.listText}>{rowData.name}</Text>
            </ImageBackground>
        )
    }
    render() {
        const { openDrawer } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <HeaderView
                    title='ORDER ONLINE'
                    onPressMenu={() => openDrawer()}
                    onPressSearch={() => {alert('onPressSearch')}}
                    onPressBasket={() => {alert('onPressBasket')}}
                />

                <ScrollView style={styles.contentView}>
                    <List
                        dataArray={orderArr}
                        renderRow={(rowData) => this.renderListView(rowData)}
                    />
                </ScrollView>
            </View >
        )
    }
}