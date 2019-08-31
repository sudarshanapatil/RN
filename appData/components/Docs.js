import React, { Component } from 'react';
import {
    Text, View, Dimensions, Image,
    StyleSheet, ScrollView, TouchableOpacity, AppRegistry, WebView
} from 'react-native';
const { width, height } = Dimensions.get('window');
//import Pdf from 'react-native-pdf';

export default class Docs extends Component {
    render() {
        const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
        return (
            <View style={{ width, height, flex: 1, alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan'
                }}>
                    <Text style={{
                        alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20,color:'white'
                    }}>
                        कांबेकर महाराज हस्ताक्षर
            </Text>
                </View>

                <View style={{
                    width: width, height: height - 50, backgroundColor: 'antiquewhite'
                }}>
                    <View style={{ width, height: height / 2, flex: 1 }}>
                        <Image style={{ width, height }} source={require('../docs/doc1.jpg')}>

                        </Image>
                    </View>
                </View>
            </View>
        )
    }

}
