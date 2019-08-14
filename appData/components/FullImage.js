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
    render() {
        return (
            <View style={{ flex: 1, width, height, justifyContent: 'center', alignItems: 'center' }}>
                
            </View>)
    }
}