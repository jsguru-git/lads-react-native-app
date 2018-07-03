import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default class MyTextInput extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <View style={{ width: 80, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={styles.font1}>{this.props.label}</Text>
                </View>
                <View style={{ width: 15 }} />
                <TextInput
                    {...this.props}
                    underlineColorAndroid='transparent'
                    placeholder={this.props.placeholder}
                    style={[styles.text, this.props.style]}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    onEndEditing={this.props.onEndEditing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 10,
        fontWeight: '400',
        paddingLeft: 4,
        height: 34,
        borderBottomWidth: 1,
        borderColor: '#a9b6b7',
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
