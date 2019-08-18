import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
})
export default class FullImage extends Component {
    constructor() {
        super()
        this.state = {
            uri: require('../../images/1.jpg')
        }
    }

    render() {
        const { navigation } = this.props;
        const imageId = navigation.getParam('imageId', '100')
        return (
            <View style={{
                flex: 1, width, height, backgroundColor: "pink",

            }}>
                <View style={{
                    width, height: 50, backgroundColor: "darkcyan",
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{
                        alignContent: 'center', alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                    }}>
                        कांबेकर महाराज फोटो गॅलरी
                </Text>
                </View>
                <View style={{
                    width, height: height - 50, backgroundColor: "white",
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <View style={{
                        width, height: height - 250, backgroundColor: "red",
                        justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 150
                    }}>
                        <Image style={{ width: width, height: height - 250, }} source={imageId}>
                        </Image>

                    </View>
                </View>
            </View>)
    }
}

