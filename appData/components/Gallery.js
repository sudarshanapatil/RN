import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';

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

const imageIds = [1, 2, 3, 4, 5]
export default class Gallary extends Component {
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
                        alignSelf: 'center', fontWeight: 'bold', fontSize: 20
                    }}>
                        कांबेकर महाराज फोटो गॅलरी
                </Text>
                </View>
                <View style={{ width: width, height: height - 50, backgroundColor: 'antiquewhite' }}>
                    <View style={{ width, height: (height - 50) / 3, backgroundColor: 'pink' }}>
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
                    <View style={{ width, height: (height - 50) / 3 }}>
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
                    <View style={{ width, height: (height - 50) / 3 }}>
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
                </View>
            </View>

        )
    }
}
