import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import oldImgaes from '../databaseFiles/imageList'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
const backAction = NavigationActions.back({
    screen: 'Others',
});
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    recommImage: {
        width: (width / 2) - 10,
        height: ((height - 50 - 50) / 3) - 40,
        borderRadius: 5
    },
    imageCard:
    {
        width: (width / 2) - 10,
        height: ((height - 50 - 50) / 3) - 40,
        marginRight: 5

    },
    rowCard: {
        width,
        height: ((height - 50 - 50) / 3),
    },
    rowCardText: {
        width, height: 40,
        justifyContent: 'center',
        flexDirection: "row",
        alignItems: 'center'

    },
    rowCardImage: {
        width,
        height: ((height - 50 - 50) / 3) - 40,
        backgroundColor: 'pink',
        flexDirection: "row",
    },
    rowTitle: {
        alignItems: 'center', justifyContent: 'center',
        fontSize: 20, color: "darkcyan", width: width - 100,
    },

    nextButton: {
        width: 100, flexDirection: "row", justifyContent: 'center',
        alignItems: 'center',
    },
    nextText: {
        width: 70, flexDirection: "row", justifyContent: 'center',
        alignItems: 'center', padding: 2
    }
})

export default class Gallary extends Component {
    constructor() {
        super();
    }
    displayImage = (path) => {
        this.props.navigation.navigate("FullImage", { imageId: path })
    }
    showImageList = (galleryImages) => {
        this.props.navigation.navigate("PhotoList", { imageArray: galleryImages })
    }
    goBack = () => {
        this.props.navigation.dispatch(backAction);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center',flexDirection:'row',
                    width: width, height: 50, backgroundColor: 'darkcyan'
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
                            alignSelf: 'center', fontFamily: 'Laila-Bold', fontSize: 20, color: "white"
                        }}>
                            {`कांबेकर महाराज फोटो गॅलरी`}
                        </Text>

                    </View>
                </View>
                <ScrollView>
                    <View style={{
                        flex: 1, width,
                        backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap'
                    }}>

                        {
                            oldImgaes.map((item, i) =>
                                <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                    <View style={{
                                        width: width / 2 - 8, height: height / 4 - 8, margin: 4,
                                        backgroundColor: 'pink',
                                        elevation: 5, alignItems: 'center', justifyContent: 'center',
                                        borderRadius: 10

                                    }}>
                                        <Image style={{ width: width / 2 - 8, height: height / 4 - 8, margin: 4, borderRadius: 10 }}
                                            source={item.src}>

                                        </Image>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </ScrollView>
            </View>

        )
    }
}
