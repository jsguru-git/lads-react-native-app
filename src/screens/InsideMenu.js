import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/InsideMenu';
import HeaderView from '../components/HeaderView';
import { Icon } from 'native-base';
import GridView from 'react-native-super-grid';

const items = [
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Lads 70's B`,
        Bestseller: true,
        Musttry: false,
        price: 39,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Steak Bagel`,
        Bestseller: false,
        Musttry: true,
        price: 56,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Swiss & Mushroom`,
        Bestseller: false,
        Musttry: false,
        price: 34,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Big Lads`,
        Bestseller: false,
        Musttry: true,
        price: 49,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Pina-Colada`,
        Bestseller: true,
        Musttry: false,
        price: 39,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Classic Burger`,
        Bestseller: false,
        Musttry: false,
        price: 29,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
    {
        img: require('../assets/images/foods/food1.png'),
        name: `Classic Burger`,
        Bestseller: false,
        Musttry: false,
        price: 29,
        details: '160 G of charcoal grilled 100% WAGYU beef patty with tomato, homemade pickles, grilled onion, egg, cheddar, and mozzarella cheese'
    },
];


export default class Locations extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    renderGridView(item) {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                <Image resizeMode='stretch' source={item.img} style={{flex: 1, width: '100%'}}/>
                <View style={styles.detailView}>
                    <View style={styles.itemTitle}>
                        <View style={styles.itemTitle1}>
                            <Text style={styles.font1}>{item.name}</Text>
                            <View style={{width: 5}} />
                            <View display={item.Bestseller==true?'flex':'none' }>
                                <Icon type='FontAwesome' name='star' style={styles.icon1} />
                            </View>
                            <View display={item.Musttry==true?'flex':'none' }>
                                <Icon type='FontAwesome' name='heart' style={styles.icon2} />
                            </View>
                        </View>
                        <View style={styles.itemTitle2}>
                            <Text style={styles.font1}>{item.price}</Text>
                            <Text style={[styles.font2, {marginBottom: 2}]}>AED</Text>
                        </View>
                    </View>
                    <Text style={styles.font2}>{item.details}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { openDrawer } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#f7f8f8' }}>
                <HeaderView
                    title='WAGYU BEEF BURGER'
                    onPressMenu={() => openDrawer()}
                    onPressSearch={() => {alert('onPressSearch')}}
                    onPressBasket={() => {alert('onPressBasket')}}
                />
                <View style={{flex: 1}}>
                    <View style={styles.Bestseller}>
                        <TouchableOpacity style={styles.iconView1}>
                            <Icon type='FontAwesome' name='star' style={styles.icon1} />
                            <Text style={styles.icon1}>Bestseller</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconView1}>
                            <Icon type='FontAwesome' name='heart' style={styles.icon2} />
                            <Text style={styles.icon2}>Must try</Text>
                        </TouchableOpacity>
                    </View>
                    <GridView
                        spacing={10}
                        itemDimension={160}
                        items={items}
                        style={styles.gridView}
                        renderItem={item => this.renderGridView(item)}
                    />
                </View>
            </View >
        )
    }
}