import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native';
import HeaderView from '../components/HeaderView';
import styles from '../styles/Home';
var {width} = Dimensions.get('window');
import img from '../assets/images/home_bg.png';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }

    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;
        const sz = Image.resolveAssetSource(img);
        this.setState({
            width: containerWidth,
            height: containerWidth * sz.height / sz.width
        });
    }

    render() {
        const { openDrawer } = this.props.navigation;
        const shadowOpt = {
            width: width,
            height: 40,
            color:"#000",
            borderColor: '#000',
            border:10,
            opacity:0.3,
            x:0,
            y:-5,
        }
        return (
            <View style={{ flex: 1 }}>
                <HeaderView
                    title='LADS BURGER'
                    onPressMenu={() => openDrawer()}
                    onPressSearch={() => {alert('onPressSearch')}}
                    onPressBasket={() => {alert('onPressBasket')}}
                />

                <ImageBackground
                    resizeMode="cover"
                    style={{flex: 1}}
                    source={img}
                />

                {/* <View style={{flex: 1}} onLayout={this._onLayout.bind(this)}>
                    <Image
                        source={img}
                        resizeMode="cover"
                        style={{width: this.state.width, height: this.state.height}}
                    />
                </View> */}
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: '#f15a2c'}]}
                        onPress={() => this.props.navigation.navigate('MyAccount')}
                    >
                        <Text style={{color: 'white', fontSize: 20, fontFamily: 'Blueberry-Pie', textAlign: 'center'}}>MY ACCOUNT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#02abb1'}]}>
                        <Text style={{color: 'white', fontSize: 28, fontFamily: 'Just tell me what', textAlign: 'center'}}>ORDER{'\r\n'}HERE</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

export default Main;