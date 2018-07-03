import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/Cart';
import HeaderView from '../components/HeaderView_Cart';
import BottomView from '../components/BottomView';
import { Button, List } from 'native-base';

const cartArr = [
    {
        img: require('../../src/assets/images/breakfast.png'),
        name: '1x Classic Burger',
        price: 29,
        Combo: 'Combo: Pepsi, Lotus Cheesecake',
        comboPrice: 20,
        Add: 'Add: Avocado, Bacon, Chesse, Egg',
        addPrice: 13,
        Without: 'Without: Onion, Pickles',
    },
    {
        img: require('../../src/assets/images/pasta.png'),
        name: '1x Classic Burger',
        price: 29,
        Combo: 'Combo: NA',
        comboPrice: 0,
        Add: 'Add: NA',
        addPrice: 0,
        Without: 'Without: NA'
    },
    {
        img: require('../../src/assets/images/chicken.png'),
        name: '2x Classic Burger',
        price: 58,
        Combo: 'Combo: 7UP, Pepsi',
        comboPrice: 20,
        Add: 'Add: Grilled Onion, Tomato',
        addPrice: 0,
        Without: 'Without: NA'
    },
    {
        img: require('../../src/assets/images/pasta.png'),
        name: '2x Classic Burger',
        price: 58,
        Combo: 'Combo: 7UP, Pepsi',
        comboPrice: 20,
        Add: 'Add: Grilled Onion, Tomato',
        addPrice: 0,
        Without: 'Without: NA'
    },
    {
        img: require('../../src/assets/images/dessert.png'),
        name: '2x Classic Burger',
        price: 58,
        Combo: 'Combo: 7UP, Pepsi',
        comboPrice: 20,
        Add: 'Add: Grilled Onion, Tomato',
        addPrice: 0,
        Without: 'Without: NA'
    },
    {
        img: require('../../src/assets/images/milkshake.png'),
        name: '2x Classic Burger',
        price: 58,
        Combo: 'Combo: 7UP, Pepsi',
        comboPrice: 20,
        Add: 'Add: Grilled Onion, Tomato',
        addPrice: 0,
        Without: 'Without: NA'
    },
];
export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    renderListView(rowData) {
        return (
            <View style={{backgroundColor: 'white', width: '100%', marginBottom: 10, flexDirection: 'row'}}>
                <Image source={rowData.img} style={{ width: 120, height: 120}} />
                <View style={{flex: 1, padding: 10}}>
                    <View style={styles.cartSubView1} >
                        <Text style={styles.font1}>{rowData.name}</Text>
                        <Text style={styles.font2}>{rowData.price}<Text style={styles.font3}> aed</Text></Text>
                    </View>
                    <View style={styles.cartSubView1} >
                        <Text style={styles.font3}>{rowData.Combo}</Text>
                        <Text style={styles.font2}>{rowData.comboPrice}<Text style={styles.font3}> aed</Text></Text>
                    </View>
                    <View style={styles.cartSubView1} >
                        <Text style={styles.font3}>{rowData.Add}</Text>
                        <Text style={styles.font2}>{rowData.addPrice}<Text style={styles.font3}> aed</Text></Text>
                    </View>
                    <View style={styles.cartSubView1} >
                        <Text style={styles.font3}>{rowData.Without}</Text>
                    </View>
                    <View style={{flex: 1}} />
                    <View style={styles.line}></View>
                    <View style={{flex: 1}} />
                    <View style={styles.cartSubView1}>
                        <View style={styles.spin}>
                            <Button bordered dark style={styles.spinLeft}><Text style={styles.spinText}>-</Text></Button>
                            <Button dark style={styles.spinLeft}><Text style={styles.spinValueText}>2</Text></Button>
                            <Button bordered dark style={styles.spinLeft}><Text style={styles.spinText}>+</Text></Button>
                            <Button bordered dark style={styles.EditMeal}><Text style={styles.EditMealText}>Edit Meal</Text></Button>
                        </View>
                        <Text style={styles.font1}>62<Text style={styles.font3}>aed</Text></Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ececec' }}>
                <HeaderView
                    title='MY CART'
                    onPressMenu={() => {alert('onPressMenu')}}
                />
                <ScrollView style={styles.contentView}>
                    <List
                        dataArray={cartArr}
                        renderRow={(rowData) => this.renderListView(rowData)}
                    />
                </ScrollView>

                <BottomView>
                    <Button rounded style={styles.CheckoutButton}>
                        <Text style={styles.CheckoutText}>Checkout</Text>
                    </Button>
                </BottomView>
            </View>
        )
    }
}