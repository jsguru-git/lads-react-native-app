import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ART, Dimensions, PanResponder } from 'react-native';
import styles from '../styles/MyAccount';
import HeaderView from '../components/HeaderView';
import Svg,{Path,Circle,G} from 'react-native-svg'
var {width, height} = Dimensions.get('window');

const {
    Surface,
    Group,
    Shape,
  } = ART;

export default class MyAccount extends Component {
    constructor(props){
        super(props)
        this.handlePanResponderMove = this.handlePanResponderMove.bind(this)
        this.cartesianToPolar = this.cartesianToPolar.bind(this)
        this.polarToCartesian = this.polarToCartesian.bind(this)
        const smallestSide = (Math.min(width,height))
        this.state = {
          cx: width/2,
          cy: height/2,
          r: (smallestSide/2)*0.85
        }
      }
      componentWillMount = () => {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: this.handlePanResponderMove
        })
      }
      polarToCartesian(angle){
        const {cx,cy,r} = this.state
            , a = (angle-270) * Math.PI / 180.0
            , x = cx + (r * Math.cos(a))
            , y = cy + (r * Math.sin(a))
        return {x,y}
      }
      cartesianToPolar(x,y){
        const {cx,cy} = this.state
        return Math.round((Math.atan((y-cy)/(x-cx)))/(Math.PI/180)+((x>cx) ? 270 : 90))
      }
      handlePanResponderMove({nativeEvent:{locationX,locationY}}){
        this.props.onValueChange(this.cartesianToPolar(locationX,locationY))
      }
    render() {
        const { openDrawer } = this.props.navigation;
        const {value,meterColor,textColor,onValueChange} = this.props;
        const {cx,cy,r} = this.state;
        const startCoord = this.polarToCartesian(0);
        const endCoord = this.polarToCartesian(value);
        
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <HeaderView
                    title='MY ACCOUNT'
                    onPressMenu={() => openDrawer()}
                    onPressSearch={() => {alert('onPressSearch')}}
                    onPressBasket={() => {alert('onPressBasket')}}
                />

                <Svg onLayout={this.onLayout} width={width} height={height}>
                    <Circle
                        cx={100}
                        cy={100} r={100}
                        stroke='#02abb1'
                        strokeWidth={5}
                        fill='none'/>
                    {/* <Path
                        stroke='#f00' strokeWidth={10} fill='none'
                        cx={100}
                        cy={100}
                        // d={`M${startCoord.x} ${startCoord.y} A ${r} ${r} 0 ${value>180?1:0} 1 ${endCoord.x} ${endCoord.y}`}
                        d="M 0 0 A 100 100 0 0 1 200 200"
                    />
                    <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
                    <G x={endCoord.x-7.5} y={endCoord.y-7.5}>
                    <Circle cx={7.5} cy={7.5} r={10} fill={meterColor} {...this._panResponder.panHandlers}/>
                    <Text key={value+''} x={7.5} y={1} fontSize={10} fill={textColor} textAnchor="middle">{value+''}</Text>
                    </G> */}
                </Svg>
            </View >
        )
    }
}