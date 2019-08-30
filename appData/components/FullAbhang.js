import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, Dimensions, ScrollView, StyleSheet, ImageBackground, AppRegistry } from 'react-native';
import { NavigationActions } from 'react-navigation';

const { width, height } = Dimensions.get('window');
let style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    navButtons: { width: width / 5, height: 50, alignItems: 'center', justifyContent: 'center' }
})
import TrackPlayer from 'react-native-track-player';
AppRegistry.registerComponent('appname', () => App);
const backAction = NavigationActions.back({
    screen: 'Abhang',
});
export default class FullAbhang extends Component {
    constructor() {
        super()
        TrackPlayer.registerEventHandler(() => { });
        //import Sound from 'react-native-sound';
        TrackPlayer.setupPlayer().then(async () => {

            // Adds a track to the queue
            await TrackPlayer.add({
                id: 'trackId',
                url: require('../audios/flute.mp3'),
                title: 'Track Title',
                artist: 'Track Artist',
                // artwork: require('./5.jpg')
            });
        })

    }
    componentWillMount() {
        TrackPlayer.play()
    }
    componentWillUnmount() {
        TrackPlayer.stop()
    }
    pauseSound = (type) => {
        if (type == 0)
            TrackPlayer.pause()
        else
            TrackPlayer.play()
    }
    goBack = () => {
        this.props.navigation.dispatch(backAction);
    }
    render() {
        const { navigation } = this.props;
        const fullAbhang = navigation.getParam('fullAbhang', '100')
        return (
            <View style={{
                flex: 1, width, height
            }}>
                <View style={{
                    width, height: 50, backgroundColor: "darkcyan"
                }}>
                    <View style={{ flexDirection: 'row', alignContent: "flex-end", justifyContent: "flex-end" }}>
                        <View style={style.navButtons}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => this.goBack()} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="pause-circle-o" size={30} color="white" onPress={() => this.pauseSound(0)} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="play-circle" size={30} color="white" onPress={() => this.pauseSound(1)} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="bookmark" size={30} color="white" onPress={() => this.pauseSound(1)} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="share-alt" size={30} color="white" onPress={() => this.pauseSound(1)} />
                        </View>
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
                                alignSelf: 'center', fontSize: 20, color: '#000000', fontFamily: 'Kalam-Regular'

                            }}>
                                {fullAbhang}
                            </Text>

                        </View>
                    </ImageBackground>
                </View>
            </View>)
    }
}