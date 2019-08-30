import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import galleryImages from '../databaseFiles/galleryImages'
import shishyaImages from '../databaseFiles/shishya'
import functionImages from '../databaseFiles/functions'
import oldImgaes from '../databaseFiles/imageList'
import Icon from 'react-native-vector-icons/FontAwesome';

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
    render() {
        return (
            <View style={{
                flex: 1,
                width: width, height: height, backgroundColor: 'white'
            }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'darkcyan'
                }}>
                    <Text style={{
                        alignContent: 'center', alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                    }}>
                        कांबेकर महाराज फोटो गॅलरी
                </Text>
                </View>
                <View style={{ width: width, height: height - 50, backgroundColor: 'white' }}>

                    <View style={styles.rowCard}>
                        <View style={styles.rowCardText}>
                            <Text style={styles.rowTitle}>
                                कांबेकर महाराज
                            </Text>
                            <TouchableOpacity onPress={() => this.showImageList(oldImgaes)}>
                                <View style={styles.nextButton}>
                                    <View style={styles.nextText}>
                                        <Text style={{ color: 'darkcyan', fontSize: 18 }}>पूर्ण पहा</Text>
                                    </View>
                                    <Icon name="caret-right" size={35} color="darkcyan"></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    galleryImages.map((item, i) =>

                                        <View style={styles.imageCard}>
                                            <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                                <Image style={styles.recommImage}
                                                    source={item.src}>
                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.rowCard}>
                        <View style={styles.rowCardText}>
                            <Text style={styles.rowTitle}>
                                कांबेकर महाराज शिष्य परिवार
                            </Text>
                            <TouchableOpacity onPress={() => this.showImageList(shishyaImages)}>
                                <View style={styles.nextButton}>
                                    <View style={styles.nextText}>
                                        <Text style={{ color: 'darkcyan', fontSize: 18 }}>पूर्ण पहा</Text>
                                    </View>
                                    <Icon name="caret-right" size={35} color="darkcyan"></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    shishyaImages.map((item, i) =>
                                        <View key={i} style={{
                                            height: (height - 50 - 50) / 3 - 40,
                                            backgroundColor: 'antiquewhite', flexDirection: 'row'
                                        }}>
                                            <View style={styles.imageCard}>
                                                <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                                    <Image style={styles.recommImage}
                                                        source={item.src}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>)
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.rowCard}>
                        <View style={styles.rowCardText}>
                            <Text style={styles.rowTitle}>
                                वर्षभरातील कार्यक्रम
                            </Text>
                            <TouchableOpacity onPress={() => this.showImageList(functionImages)}>
                                <View style={styles.nextButton}>
                                    <View style={styles.nextText}>
                                        <Text style={{ color: 'darkcyan', fontSize: 18 }}>पूर्ण पहा</Text>
                                    </View>
                                    <Icon name="caret-right" size={35} color="darkcyan"></Icon>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    functionImages.map((item, i) =>
                                        <View key={i} style={{
                                            height: (height - 50 - 50) / 3 - 40,
                                            backgroundColor: 'antiquewhite', flexDirection: 'row'
                                        }}>
                                            <View style={styles.imageCard}>
                                                <TouchableOpacity onPress={() => this.displayImage(item.src)}>
                                                    <Image style={styles.recommImage}
                                                        source={item.src}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>)
                                }</ScrollView>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
