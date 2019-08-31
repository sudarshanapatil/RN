import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text, View, Dimensions, Share, ScrollView, StyleSheet,
    ImageBackground, AppRegistry, ToastAndroid, TouchableOpacity
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const { width, height } = Dimensions.get('window');
const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    fontButton: {
        width: 40, height: 40,
        borderRadius: 20, justifyContent: 'center', alignItems: 'center', margin: 2
    },
    fontView: {
        width: width / 2, height: 50, justifyContent: 'center',
        alignItems: 'center'
    },
    navButtons: { width: width / 5, height: 50, alignItems: 'center', justifyContent: 'center' }
});

AppRegistry.registerComponent('appname', () => App);

export default class FullAbhang extends Component {
    constructor() {
        super()
        TrackPlayer.registerEventHandler(() => { });
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add({
                id: 'trackId',
                url: require('../audios/flute.mp3'),
                title: 'Track Title',
                artist: 'Track Artist',
                artwork: require('../../images/specialPhotos/8.jpeg')
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
        TrackPlayer.stop()
        const { navigate } = this.props.navigation;
        navigate('Aarati');
    }
    onShare = async (data) => {
        try {
            const result = await Share.share({
                message: `भक्तिरस\n\n${data}\n\n अधिक अभंग वाचण्यासाठी डाउनलोड करा संत साहित्य अँप`
            });
        } catch (error) {
            alert(`काही तंत्ररिक कारणांमुळे शेअर केले जाऊ शकत नाही .क्षमस्व!`);
        }
    }
    showToast = () => {

        ToastAndroid.showWithGravity('तुमच्या फेवरिट्स मध्ये संपादित केले!', ToastAndroid.SHORT, ToastAndroid.CENTER);
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
                            <Icon name="bookmark" size={30} color="white" onPress={() => this.showToast()} />
                        </View>
                        <View style={style.navButtons}>
                            <Icon name="share-alt" size={30} color="white" onPress={() => this.onShare(fullAbhang)} />
                        </View>
                    </View>

                </View>
                <ScrollView>
                    <View style={{
                        width,flex:1
                    }}>
                        <ImageBackground
                            style={{ width: width }}
                            source={require('../../images/specialPhotos/8.jpeg')}
                            opacity={0.2}
                            resizeMode={'stretch'}>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center',
                                margin: 5, padding: 10, elevation: 7, width, 
                            }}>
                                <Text style={{
                                    alignContent: 'center', alignItems: 'center', textAlign: "justify",
                                    alignSelf: 'center', fontSize: 20, color: '#000000',
                                    fontFamily: 'Laila-Medium'

                                }}>
                                    {fullAbhang}
                                </Text>

                            </View>
                            
                        </ImageBackground>
                    </View>
                </ScrollView>
                <View style={{
                                width, height: 50, position: 'absolute', alignItems: 'center',
                                bottom: 0, left: 0, flexDirection: "row", backgroundColor: '#e9fcf6'
                            }}>
                                <View style={{
                                    width: width / 3, height: 50,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => this.increaseFont("minus")}>
                                        <View style={style.fontButton}>
                                            <Text style={{ fontSize: 22, color: 'black', fontWeight: '0' }}>अ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={style.fontView}>
                                    <TouchableOpacity onPress={() => this.increaseFont("plus")}>
                                        <View style={style.fontButton}>
                                            <Text style={{ fontSize: 32, color: 'black' }}>अ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>
            </View>)
    }
}