import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import BaseImagePage from '../../components/BaseImagePage';
import SocialButton from '../../components/SocialButton';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onPressFacebookLogin = this.onPressFacebookLogin.bind(this);
    }

    onPressFacebookLogin() {
        LoginManager.logInWithReadPermissions(['public_profile', 'email'])
        .then((result) => {
            if(result.isCancelled) {
                console.log("cancelled fb login");
                return;
            }
            
            return AccessToken.getCurrentAccessToken()
        })
        .then((data) => {
            console.log("FB Data", data);
            // this.props.dispatch(loginWithFacebook(data.accessToken));
        })
    }

    render() {
        return (
            <BaseImagePage source={require('../../assets/images/login_bg.png')}>
                <View style={{flex: 1, width: '60%', justifyContent: 'center'}}>
                    <View style={{marginBottom: 30, alignItems: 'center'}}>
                        <Image
                            resizeMode='cover'
                            source={require('../../assets/images/logo.png')}
                            style={{width: 150, height: 150}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <SocialButton
                            width='47%'
                            iconName='facebook'
                            iconType='FontAwesome'
                            title='Sign in'
                            onPress={this.onPressFacebookLogin}
                        />
                        <SocialButton
                            width='47%'
                            iconName='google-'
                            iconType='Entypo'
                            title='Sign in'
                        />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 15}}>
                        <View style={{flex: 1, minHeight: 1, backgroundColor: 'white'}}/>
                        <Text style={{color: 'white', fontFamily: 'MyriadPro-Regular'}}>or</Text>
                        <View style={{flex: 1, minHeight: 1, backgroundColor: 'white'}}/>
                    </View>
                    <View style={{paddingTop: 15}}>
                        <TextInput
                            value={this.state.email}
                            onChangeText={(value) => this.setState({email: value})}
                            placeholder="Email Address"
                            placeholderTextColor="black"
                            textContentType="emailAddress"
                            underlineColorAndroid="transparent"
                            keyboardType="email-address"
                            returnKeyType="next"
                            style={styles.input}
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={(value) => this.setState({password: value})}
                            placeholder="Password"
                            placeholderTextColor="black"
                            textContentType="password"
                            underlineColorAndroid="transparent"
                            returnKeyType="done"
                            secureTextEntry
                            style={[styles.input, {marginTop: 15}]}
                        />
                    </View>
                    <View style={{width: '100%', paddingVertical: 15, alignItems: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Main')}
                        >
                            <Text style={{color: 'black', fontSize: 12, fontFamily: 'MyriadPro-Regular'}}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: '100%', borderTopWidth: 1, borderTopColor: 'white', paddingTop: 15}}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('Signup')}
                            style={[styles.button, {width: '100%'}]}
                        >
                            <Text style={{color: 'black', fontSize: 12, fontFamily: 'MyriadPro-Regular'}}>
                                New? Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BaseImagePage>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 35,
        width: '40%',
        backgroundColor: 'rgb(255, 255, 255)',
        opacity: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    input: {
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 0,
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        fontFamily: 'MyriadPro-Regular',
        fontSize: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.46)',
    }
});

export default Page;