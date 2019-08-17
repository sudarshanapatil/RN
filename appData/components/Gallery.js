import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import galleryImages from '../databaseFiles/galleryImages'
import shishyaImages from '../databaseFiles/shishya'
import functionImages from '../databaseFiles/functions'

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    recommImage: {
        width: (width / 2) - 5,
        height: ((height - 50) / 3) - 80,
        borderRadius: 5
    },
    imageCard:
    {
        width: (width / 2) - 10,
        height: ((height - 50) / 3) - 80,
        marginRight: 8

    },
    rowCard: {
        width,
        height: ((height - 50) / 3) - 80,
        marginBottom: 50

    },
    rowCardText: {
        width, height: 30
    },
    rowCardImage: {
        width,
        height: ((height - 50) / 3) - 80,
        backgroundColor: 'pink',
    },
    rowTitle: {
        alignContent: 'center', alignItems: 'center', textAlign: "left",
        fontSize: 20, color: "darkcyan"
    }

})

export default class Gallary extends Component {
    constructor() {
        super();
    }
    displayImage = (path) => {
        this.props.navigation.navigate("FullImage", { imageId: path })
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
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    galleryImages.map((item, i) =>
                                        <View key={i} style={{ height: 400, backgroundColor: 'white', flexDirection: 'row' }}>
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
                                कांबेकर महाराज शिष्य परिवार
                            </Text>
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    shishyaImages.map((item, i) =>
                                        <View key={i} style={{ height: 400, backgroundColor: 'antiquewhite', flexDirection: 'row' }}>
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
                        </View>
                        <View style={styles.rowCardImage}>
                            <ScrollView horizontal={true}>
                                {
                                    functionImages.map((item, i) =>
                                        <View key={i} style={{ height: 400, backgroundColor: 'antiquewhite', flexDirection: 'row' }}>
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
