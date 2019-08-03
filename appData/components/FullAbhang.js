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
export default class FullAbhang extends Component {
    render() {
        return (
            <ImageBackground style={{width:width-20,height:height-20,margin:10}} source={require('../../images/1.jpg')}>

            {/* <View style={{
                width, height,
                backgroundColor: 'antiquewhite', alignContent: 'center'
            }}> */}
                <View style={{ margin: 5, padding: 10 }}>
                    <Text style={{
                        alignContent: 'center', alignItems: 'center', textAlign: "justify",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20
                    }}>
                        समचरणदृष्टि विटेवरी साजिरी । तेथें माझी हरी वृत्ति राहो ॥१॥{"\n"}
                        आणीक न लगे मायिक पदार्थ । तेथें माझें आर्त्त नको देवा ॥ध्रु.॥{"\n"}
                        ब्रम्हादिक पदें दुःखाची शिराणी । तेथें दुश्चित झणी जडों देसी ॥२॥{"\n"}
                        तुका म्हणे त्याचें कळलें आम्हां वर्म । जे जे कर्मधर्म नाशवंत ॥३॥{"\n"}
                    </Text>
                   
                </View>
            {/* </View> */}
            </ImageBackground>)
    }
}