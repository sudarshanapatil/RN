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
            <View style={{ flex: 1, width, height, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground
                    style={{ width: width, height }}
                    source={require('../../images/8.jpeg')}
                    opacity={0.1}
                    resizeMode={'stretch'}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center', alignItems: 'center',
                        margin: 5, padding: 10, elevation: 7,

                    }}>
                        <Text style={{
                            alignContent: 'center', alignItems: 'center', textAlign: "justify",
                            alignSelf: 'center', fontSize: 24, color: '#000000'
                        }}>
                            समचरणदृष्टि विटेवरी साजिरी । तेथें माझी हरी वृत्ति राहो ॥१॥{"\n"}
                            आणीक न लगे मायिक पदार्थ । तेथें माझें आर्त्त नको देवा ॥ध्रु.॥{"\n"}
                            ब्रम्हादिक पदें दुःखाची शिराणी । तेथें दुश्चित झणी जडों देसी ॥२॥{"\n"}
                            तुका म्हणे त्याचें कळलें आम्हां वर्म । जे जे कर्मधर्म नाशवंत ॥३॥{"\n"}
                        </Text>

                    </View>
                </ImageBackground>
            </View>)
    }
}