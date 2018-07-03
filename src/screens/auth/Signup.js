import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import BaseImagePage from '../../components/BaseImagePage';
import styles from '../../styles/auth/Signup';
import MyTextInput from '../../components/MyTextInput';
import Dropdown from '../../components/DropDown';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'Male'
        }
    }
    render() {
        const genderType =[
            { value: 'Male' },
            { value: 'Female' }
        ];
        return (
            <BaseImagePage source={require("../../assets/images/bg.png")} opacity={0.52}>
                <View style={{flex: 1}}>
                    <View style={styles.HeaderView}>
                        <View style={styles.leftHeaderView}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={{ fontSize: 28, fontFamily: 'MyriadPro-Regular', color: 'white', padding: 10 }}>{'<'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleHeaderView}>
                            <Text style={styles.titleFont}>SIGN UP</Text>
                        </View>
                        <View style={styles.RightHeaderView}>

                        </View>
                    </View>
                    <View style={styles.contentView}>
                        <MyTextInput label='First Name'/>
                        <MyTextInput label='Last Name'/>
                        <Dropdown
                            label='Gender'
                            data={genderType}
                            value={this.state.gender}
                            onChangeText={(value) => this.setState({gender: value})}
                        />
                        <MyTextInput label='Date of Birth'/>
                        <MyTextInput label='Mobile'/>
                        <MyTextInput label='Email Address'/>
                        <Dropdown label='Nationality'/>
                        <Dropdown label='Location'/>
                        <Dropdown label='Allergies?'/>
                        <View style={{ flex: 1 }}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BaseImagePage>
        )
    }
}