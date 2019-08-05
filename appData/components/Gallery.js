import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    horizontalCard: {
        flexDirection: 'row', width: width, height: (height - 50) / 3,
    },
    imageHolderCard: {
        width: width / 2, height: (height - 50) / 3
    },
    imageCard:
        { width: (width / 2) - 10, height: ((height - 50) / 3) - 10, margin: 5, borderRadius: 8 }

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

                    {
                        imageIds.map((item) =>
                            <View style={styles.horizontalCard}>
                                <View style={styles.imageHolderCard}>
                                    <Image style={styles.imageCard}
                                        source={require('../../images/1.jpg')}>
                                    </Image>
                                </View>
                                <View style={styles.horizontalCard}>
                                    <Image style={styles.imageCard}
                                        source={require('../../images/2.jpg')}>
                                    </Image>
                                </View>
                            </View>
                        )
                    }
                </View>
            </View>

        )
    }
}
