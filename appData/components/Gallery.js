import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import galleryImages from '../databaseFiles/galleryImages'
import shishyaImages from '../databaseFiles/shishya'
import functionImages from '../databaseFiles/functions'

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
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
                width: width, height: height, backgroundColor: 'antiquewhite'
            }}>
                <View style={{
                    justifyContent: 'center',
                    width: width, height: 50, backgroundColor: 'orange'
                }}>
                    <Text style={{
                        alignContent: 'center', alignItems: 'center', textAlign: "center",
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20, color: "white"
                    }}>
                        कांबेकर महाराज फोटो गॅलरी
                </Text>
                </View>
                <View style={{ width: width, height: height - 50, backgroundColor: 'antiquewhite' }}>
                    <View style={{ width, height: (height - 50) / 3, backgroundColor: 'pink' }}>
                        <ScrollView horizontal={true}>
                            {
                                galleryImages.map((item, i) =>
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
                    <View style={{ width, height: (height - 50) / 3 }}>
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
                    <View style={{ width, height: (height - 50) / 3 }}>
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

        )
    }
}
