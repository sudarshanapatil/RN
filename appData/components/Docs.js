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
            <View style={{ width, height: height / 2, flex: 1 }}>
            <WebView source={{uri: 'http://www.lagotzki.de/pdftk/beispiel_neu.pdf'}} style={{ flex:1}} />
                {/* <WebView style={{ width, height: 600, flex: 1 }}
                    source={{ uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf' }}
                /> */}
            </View>
            // <Pdf source={source} />
        )
    }

}
