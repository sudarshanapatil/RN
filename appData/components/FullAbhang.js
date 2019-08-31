import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Text, View, Dimensions, ScrollView, StyleSheet, ImageBackground, AppRegistry } from 'react-native';
const { width, height } = Dimensions.get('window');
let style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
})
import TrackPlayer from 'react-native-track-player';
AppRegistry.registerComponent('appname', () => App);
TrackPlayer.registerEventHandler(() => { });
//import Sound from 'react-native-sound';
TrackPlayer.setupPlayer().then(async () => {

    // Adds a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('../audios/flute.mp3'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('./5.jpg')
    });
})
export default class FullAbhang extends Component {
    componentWillMount() {
        TrackPlayer.play()
    }
    componentWillUnmount() {
        TrackPlayer.stop()
    }
    pauseSound = (type) => {
        if(type==0)
        TrackPlayer.pause()
        else
        TrackPlayer.play()
    }
    render() {
        return (
            <View style={{ flex: 1, width, height, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    margin: 5, padding: 10, elevation: 7, width, height: 50, backgroundColor: "darkcyan"
                }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Icon name="favorite" type='material'
                            color="white" onPress={() => this.addToFvrt()} />
                        <Icon name="pause" type='material'
                            color="white" onPress={() => this.pauseSound(0)} />
                        <Icon name="play_arrow" type='material'
                            color="white" onPress={() => this.pauseSound(1)} />

                    </View>
                </View>
                <View style={{
                    width, height: height - 50
                }}>
                    <ImageBackground
                        style={{ width: width, height: height - 50 }}
                        source={require('../../images/8.jpeg')}
                        opacity={0.1}
                        resizeMode={'stretch'}>

                        <View style={{
                            flex: 1,
                            justifyContent: 'center', alignItems: 'center',
                            margin: 5, padding: 10, elevation: 7, width, height: height - 50

                        }}>
                            <Text style={{
                                alignContent: 'center', alignItems: 'center', textAlign: "justify",
                                alignSelf: 'center', fontSize: 20, color: '#000000',

                            }}>
                                समचरणदृष्टि विटेवरी साजिरी । तेथें माझी हरी वृत्ति राहो ॥१॥{"\n"}
                                आणीक न लगे मायिक पदार्थ । तेथें माझें आर्त्त नको देवा ॥ध्रु.॥{"\n"}
                                ब्रम्हादिक पदें दुःखाची शिराणी । तेथें दुश्चित झणी जडों देसी ॥२॥{"\n"}
                                तुका म्हणे त्याचें कळलें आम्हां वर्म । जे जे कर्मधर्म नाशवंत ॥३॥{"\n"}
                            </Text>

                        </View>
                    </ImageBackground>
                </View>
            </View>)
    }
}