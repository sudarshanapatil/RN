import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet, Image, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class FullImage extends Component {
    constructor() {
        super()

    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Gallery');
    }
    showToast = () => {

        //ToastAndroid.showWithGravity('chan photo', ToastAndroid.SHORT, ToastAndroid.CENTER);
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
                    justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                }}>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center', justifyContent: 'center'
                    }}>

                        <Icon name="arrow-left" size={25} color="white" onPress={() => this.goBack()} />
                    </View>
                    <View style={{
                        width: width - 50, height: 50, alignItems: 'center', justifyContent: 'center'
                    }} >
                        <Text style={{
                            alignContent: 'center', alignItems: 'center', textAlign: "center",
                            alignSelf: 'center', fontSize: 20, color: "white",
                            fontFamily:'Laila-Bold'
                        }}>
                            {`कांबेकर महाराज फोटो गॅलरी`}
                        </Text>

                    </View>
                </View>
                <View style={{
                    width, height: height - 50, backgroundColor: "white",
                    alignItems: 'center'
                }}>
                   {/* <TouchableOpacity onPress={() => { this.showToast() }}> */}
                        <View style={{
                            width, height: height - 250, backgroundColor: "darkcyan",
                            justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 150
                        }}>
                            <Image style={{ width, height: height - 250, }}
                                source={imageId}
                                resizeMode='cover'
                                >
                            </Image>
                        </View>
                    {/* </TouchableOpacity> */}
                </View>
            </View>)
    }
}

