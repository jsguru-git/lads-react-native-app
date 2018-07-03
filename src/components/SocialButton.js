import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class OpacityButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity {...this.props} activeOpacity={0.8} style={{width: this.props.width}}>
                <View style={styles.button}>
                    <Icon
                        name={this.props.iconName}
                        type={this.props.iconType}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 35,
        paddingHorizontal: 30,
        flexDirection: 'row',
        backgroundColor: 'white',
        opacity: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    icon: {
        color: 'black',
        fontSize: 18,
        paddingTop: 0,
    },
    text: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'MyriadPro-Regular',
        paddingLeft: 10
    }
});