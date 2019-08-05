import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window');
import SoundPlayer from 'react-native-sound-player'

//import Sound from 'react-native-sound';

export default class Audios extends Component {
    render() {
        return (
            <View style={{ width, height, flex: 1, alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'orange'
                }}>
                    <Text style={{
                        alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20
                    }}>
                        कांबेकर महाराज प्रवचने (ऑडिओ )
                </Text>
                </View>

                <View style={{ width: width, height: 400, backgroundColor: 'pink' }}>

                    <ScrollView horizontal={true}>
                        <View style={{ height: 400, backgroundColor: 'pink',flexDirection:'row' }}>
                            <Image style={{ width, height: height - 300 }}
                                source={require('../../images/1.jpg')}>
                            </Image>
                            <Image style={{ width, height: height - 300 }}
                                source={require('../../images/2.jpg')}>
                            </Image>
                            <Image style={{ width, height: height - 300 }}
                                source={require('../../images/3.jpg')}>
                            </Image>
                        </View>
                    </ScrollView>
                </View>
                {/* {SoundPlayer.playSoundFile('moraribapu', 'mp3')} */}
                {/* {SoundPlayer.playUrl('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3')} */}
            </View >)
    }
}