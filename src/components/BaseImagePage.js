import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';

export default class BaseImagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
    }
    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;
        const sz = Image.resolveAssetSource(this.props.source);
        this.setState({
            width: containerWidth,
            height: containerWidth * sz.height / sz.width
        });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
                <ImageBackground
                    source={this.props.source}
                    style={[styles.container, {opacity: this.props.opacity}]}
                    onLayout={this._onLayout.bind(this)}
                    resizeMode='cover'
                />
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
});