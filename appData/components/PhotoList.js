import React, { Component } from 'react';
import {
    Text, View, Dimensions, Image,
    StyleSheet, ScrollView, TouchableOpacity, AppRegistry, WebView
} from 'react-native';
const { width, height } = Dimensions.get('window');
import imageList from '../databaseFiles/imageList'
import Icon from 'react-native-vector-icons/FontAwesome';

const stylesheet = StyleSheet.create({
    horizontalCard: {
        width: width - 8, height: (height - 50 - 50) / 4,
        margin: 4, flexDirection: 'row'
    },
    imageCard: {
        width: (width - 8 - 4) / 2, height: (height - 50 - 50) / 4,
        backgroundColor: "blue", margin: 2, borderRadius: 5
    },
    photoStyle: {
        width: (width - 8 - 4) / 2, height: (height - 50 - 50) / 4, borderRadius: 5
    }
})
export default class PhotoList extends Component {

    displayImage = (path) => {
        this.props.navigation.navigate("FullImage", { imageId: path })
    }
    render() {
        const { navigation } = this.props;
        const imagesToShow = navigation.getParam('imageArray', '100')
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
                        कांबेकर महाराज
            </Text>
                </View>

                <View style={{
                    width: width, height: height - 50, backgroundColor: 'white'
                }}>
                    {
                        imagesToShow.map((item, i) =>
                            <View style={stylesheet.horizontalCard}>
                                <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                    <View style={stylesheet.imageCard}>
                                        <Image style={stylesheet.photoStyle}
                                            source={item.src}>
                                        </Image>

                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                    <View style={stylesheet.imageCard}>
                                        <Image style={stylesheet.photoStyle}
                                            source={item.src}>
                                        </Image>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                </View>
            </View>
        )
    }

}
