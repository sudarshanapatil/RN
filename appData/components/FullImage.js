import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, ImageBackground } from 'react-native';
const { width, height } = Dimensions.get('window');
let style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
})
export default class FullImage extends Component {
    constructor() {
        super()
        this.state={
            uri:require('../../images/1.jpg')
        }
        // let imagePath={
        //     uri:require('../../images/1.jpg')
        // }
       //let imageId=this.props.navigation.getParam(`imageId`, 1)
        //let imagePath = { "uri": 'require(../../ images / 1.jpg)' }
    }

    render() {
        const { navigation } = this.props;
    const imageId = navigation.getParam('imageId', '100')
        return (
            <View style={{
                flex: 1, width, height, backgroundColor: "pink",
                justifyContent: 'center', alignItems: 'center'
            }}>
                {/* <ImageBackground
                    style={{ width: width, height }}
                    source={this.state.uri}
                    resizeMode={'stretch'}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center', alignItems: 'center',
                        margin: 5, padding: 10, elevation: 7,

                    }}> */}
                    <Text>{imageId}</Text>
                    {/* </View>
                </ImageBackground> */}
            </View>)
    }
}

