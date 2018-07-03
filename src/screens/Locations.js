import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/Locations';
import HeaderView from '../components/HeaderView';
import { Card, List } from 'native-base';

const info = [
    {
        name: 'JUMEIRA 3',
        address: '',
        phone: ''
    },
    {
        name: 'DOWNTOWN',
        address: '',
        phone: ''
    }
]

export default class Locations extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    renderListView(rowData) {
        return(
            <Card style={styles.card}>
                <TouchableOpacity style={styles.item1}>
                    <Text style={styles.font1}>{rowData.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item1}>
                    <Text style={styles.font2}>Address here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item1}>
                    <Text style={styles.font2}>Phone here</Text>
                </TouchableOpacity>
                <View style={{flex: 1}} />
                <TouchableOpacity style={styles.item1}>
                    <Text style={styles.font2}>View us in Maps</Text>
                </TouchableOpacity>
            </Card>
        )
    }    
    render() {
        const { openDrawer } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#f7f8f8' }}>
                <HeaderView
                    title='LOCATIONS'
                    onPressMenu={() => openDrawer()}
                    onPressSearch={() => {alert('onPressSearch')}}
                    onPressBasket={() => {alert('onPressBasket')}}
                />
                <ScrollView style={styles.contentView}>
                    <List
                        dataArray={info}
                        renderRow={(rowData) => this.renderListView(rowData)}
                    />
                    <View style={{marginTop: 20, alignItems: 'center'}}>
                        <Text style={styles.font3}>more locations soon!</Text>
                    </View>
                </ScrollView>
            </View >
        )
    }
}