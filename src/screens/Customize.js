import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/Customize';
import BottomView from '../components/BottomView';
import { Button, Icon } from 'native-base';

const img = require('../assets/images/foods/food1.png');

const items = [
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Lads 70's B`,
        Bestseller: true,
        Musttry: false,
        price: 107,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    }
]

export default class Customize extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ececec' }}>
                <ImageBackground source={img} style={styles.img}>
                    <TouchableOpacity style={{alignItems:'flex-end'}}>
                        <Icon name='close' type='EvilIcons' style={styles.closeIcon} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.titleView}>
                    <View style={styles.subTitleView1}>
                        <Text style={styles.font1}>{items[0].name}</Text>
                        <Text style={styles.font2}>{items[0].details}</Text>                      
                    </View>
                    <View style={styles.subTitleView2}>
                        <View style={styles.itemTitle2}>
                            <Text style={styles.font1}>{items[0].price}</Text>
                            <Text style={[styles.font2, {marginBottom: 7}]}>AED</Text>
                        </View>
                        <View style={styles.spin}>
                            <Button bordered dark style={styles.spinLeft}><Text style={styles.spinText}>-</Text></Button>
                            <Button dark style={styles.spinLeft}><Text style={styles.spinValueText}>2</Text></Button>
                            <Button bordered dark style={styles.spinLeft}><Text style={styles.spinText}>+</Text></Button>
                        </View>
                    </View>
                </View>
                <View style={styles.mealView}>
                    <Button style={styles.mealButtonSelected}>
                        <Text style={styles.mealText}>MEAL 1</Text>
                    </Button>
                    <View style={{width: 1}} />
                    <Button style={styles.mealButtonUnselected}>
                        <Text style={styles.mealText}>MEAL 2</Text>
                    </Button>
                </View>
                <View style={styles.comboView}>
                    <Text style={styles.comboText}>Make it a <Text style={styles.comboText_bold}>COMBO</Text>?</Text>
                    <View style={styles.subComboView}>
                        <View style={styles.subComboView1}>
                            <Text style={styles.comboText_bold}>COMBO</Text>
                            <Text style={styles.font3}>+10</Text>
                        </View>
                        <View style={styles.subComboView1}>
                            <Text style={styles.font2}>Dring + Salad + Fries</Text>
                            <Text style={styles.font2}>AED</Text>
                        </View>
                    </View>
                    <View style={styles.subComboView}>
                        <View style={styles.subComboView1}>
                            <Text style={styles.comboText_bold}>COMBO + CHEESECAKE</Text>
                            <Text style={styles.font3}>+20</Text>
                        </View>
                        <View style={styles.subComboView1}>
                            <Text style={styles.font2}>Dring + Salad + Fries + Cheesecake</Text>
                            <Text style={styles.font2}>AED</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.comboView}>
                    <Text style={styles.comboText_bold}>CUSTOMISE<Text style={styles.comboText}>your Burger!</Text></Text>
                    <View style={styles.subComboView}>
                        <View style={styles.subComboView1}>
                            <Text style={styles.comboText_bold}>ADD EXTRA</Text>
                            <Text style={styles.comboText_bold}>+0<Text style={styles.font2}>AED</Text></Text>                            
                        </View>
                    </View>
                    <View style={styles.subComboView}>
                        <View style={styles.subComboView1}>
                            <Text style={styles.comboText_bold}>WITHOUT</Text>
                        </View>
                    </View>
                </View>
                <BottomView>
                    <Button
                        dark
                        onPress={() => this.props.navigation.navigate('Cart')}
                        style={styles.buttonAddCart}>
                        <Text style={styles.mealText}>ADD TO CART (107 AED)</Text>
                    </Button>
                </BottomView>
            </View >
        )
    }
}