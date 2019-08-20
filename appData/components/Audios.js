import React, { Component } from 'react';
import {
    Text, View, Dimensions, Image,
    StyleSheet, ScrollView, TouchableOpacity, AppRegistry
} from 'react-native';
import audioLinks from '../databaseFiles/audioLinks'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    controllers: {
        backgroundColor: 'darkcyan',
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

export default class Audios extends Component {

    constructor() {
        super()
        this.state = {
            audioUrl: require('./moraribapu.mp3')
        }


    }
    playAudio = (link) => {
        this.setState({audioUrl:link})
        TrackPlayer.setupPlayer().then(async () => {
            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'trackId',
                url: this.state.audioUrl,
                title: 'Track Title',
                artist: 'Track Artist',
                artwork: require('./5.jpg')
            });
        })
        TrackPlayer.play()

    }
    componentDidMount() {
        TrackPlayer.setupPlayer().then(async () => {
            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'trackId',
                url: this.state.audioUrl,
                title: 'Track Title',
                artist: 'Track Artist',
                artwork: require('./5.jpg')
            });
        })

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
        
    }

    render() {

        return (
            <View style={{ width, height, flex: 1, alignItems: 'center' }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan'
                }}>
                    <Text style={{
                        alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: 'white'
                    }}>
                        कांबेकर महाराज प्रवचने (ऑडिओ )
                </Text>
                </View>

                <View style={{
                    width: width, height: height - 50, backgroundColor: 'white'
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
                                fontSize: 20, textAlign: 'center', margin: 5
                            }}>संग्रहित प्रवचने </Text>
                        </View>
                    </View>

                    <View style={{
                        justifyContent: 'center', alignItems: 'center', width, height: [(height - 50) / 2] - 250,
                        flex: 1, flexDirection: 'row',

                    }}>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("play")}>
                            <Text style={{ color: '#FFF' }}>चालू</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("pause")}>
                            <Text style={{ color: '#FFF' }}>थांबा</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.controllers} onPress={() => this.playMusic("stop")}>
                            <Text style={{ color: '#FFF' }}>बंद   </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{ width, height: ((height - 50) / 2) - 60, backgroundColor: 'blue' }}>
                        <ScrollView horizontal={true}>
                            {
                                audioLinks.map((item, i) =>
                                    <View style={{ height: ((height - 50) / 2) - 80, backgroundColor: 'white', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => this.playAudio(item[i + 1].link)}>
                                            <View style={styles.imageCard}>
                                                <Image style={styles.recommImage}
                                                    source={item[i + 1].src}>
                                                </Image>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }

                        </ScrollView>
                    </View>
                </View >
            </View >)
    }
}