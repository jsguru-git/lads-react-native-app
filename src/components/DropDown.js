import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class MyDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                <View style={{ width: 80, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={styles.font1}>{this.props.label}</Text>
                </View>
                <View style={{ width: 15 }} />
                <Dropdown
                    data={this.props.data}
                    valueExtractor={this.props.valueExtractor}
                    textColor='black'
                    fontSize={10}
                    onChangeText={this.props.onChangeText}
                    baseColor='white'
                    inputContainerStyle={{ borderWidth: 1, borderColor: 'black' }}
                    containerStyle={{ flex: 1, justifyContent: 'flex-end', height: 30 }}
                    renderBase={() =>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#a9b6b7', borderBottomWidth: 1 }}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                style={{ flex: 1, padding: 0, color: 'white', fontSize: 12, fontFamily: 'MyriadPro-Regular' }}
                                value={this.props.value}
                            />
                            <Text style={{ fontSize: 10, color: '#a9b6b7' }}>V</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pciker: {
        // borderColor: '#D4D5D7',
        // borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },
    itemText: {
        color: 'rgb(96, 96, 96)',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Gibson-Regular',
        paddingLeft: 4,
        height: 30,
    },
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: '400',
        paddingLeft: 4,
        height: 34,
        borderBottomWidth: 1,
        borderColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font1: {
        fontSize: 10,
        color: '#a9b6b7',
        fontFamily: 'MyriadPro-Regular'
    }
})