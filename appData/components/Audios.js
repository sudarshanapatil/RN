import React, { Component } from 'react';
import {
    Text, View, Dimensions, Image,
    StyleSheet, ScrollView, TouchableOpacity, AppRegistry
} from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    controllers: {
        backgroundColor: 'orange',
        padding: 15, margin: 10,
        borderRadius: 9
    },
    recommImage: {
        width: (width / 3) - 5,
        height: height - 500,
        borderRadius: 3
    },
    imageCard:
    {
        width: (width / 3) - 10,
        height: height - 500,
        margin: 5
    }
})
//import SoundPlayer from 'react-native-sound-player'
import TrackPlayer from 'react-native-track-player';
AppRegistry.registerComponent('appname', () => App);
TrackPlayer.registerEventHandler(() => { });
//import Sound from 'react-native-sound';
TrackPlayer.setupPlayer().then(async () => {

    // Adds a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('./moraribapu.mp3'),
        //url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_2MG.mp3',
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('./5.jpg')
    });
})
export default class Audios extends Component {
    componentDidMount() {

    }
    componentWillUnmount() {
        TrackPlayer.stop()
    }
    playMusic = (type) => {
        if (type == "play")
            TrackPlayer.play()
        else if (type == 'pause')
            TrackPlayer.pause()
        else if (type == 'stop')
            TrackPlayer.stop()
        else if (type == 'seek')
            TrackPlayer.seekTo(10)
    }

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

                <View style={{
                    width: width, height: height - 50, backgroundColor: 'antiquewhite'
                }}>
                    <View style={{
                        width, height: (height - 50) / 2,

                    }}>
                        <View style={{ width, height: ((height - 50) / 2) - 50, backgroundColor: 'pink' }}>
                            <Image style={{ width, height: ((height - 50) / 2) - 50 }}
                                source={require('../../images/1.jpg')}>
                            </Image>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20, textAlign: 'center',margin:5
                            }}>पुणे प्रवचन माला - भाग १</Text>
                        </View>
                    </View>

                    <View style={{
                        justifyContent: 'center', alignItems: 'center', width, height: [(height - 50) / 2] - 250,
                        flex: 1, flexDirection: 'row',

                    }}>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("play")}>
                            <Text style={{ color: '#FFF' }}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("pause")}>
                            <Text style={{ color: '#FFF' }}>Pause</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("stop")}>
                            <Text style={{ color: '#FFF' }}>Stop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("seek")}>
                            <Text style={{ color: '#FFF' }}>Seek</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width, height: 250, backgroundColor: 'blue' }}>
                        <ScrollView horizontal={true}>
                            <View style={{ height: 400, backgroundColor: 'antiquewhite', flexDirection: 'row' }}>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/1.jpg')}>
                                    </Image>
                                </View>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/2.jpg')}>
                                    </Image>
                                </View>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/3.jpg')}>
                                    </Image>
                                </View>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/7.jpeg')}>
                                    </Image>
                                </View>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/8.jpeg')}>
                                    </Image>
                                </View>
                                <View style={styles.imageCard}>
                                    <Image style={styles.recommImage}
                                        source={require('../../images/9.jpeg')}>
                                    </Image>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View >
            </View >)
    }
}