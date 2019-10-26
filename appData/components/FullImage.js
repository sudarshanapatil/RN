import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, StyleSheet, Image, Animated ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import imageList from '../databaseFiles/imageList'
const { width, height } = Dimensions.get('window');
let style = StyleSheet.create({
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
    navButtons: { width: width / 3, height: 50, alignItems: 'center', justifyContent: 'center' }
})
export default class FullImage extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        const newPageNo = navigation.getParam('imageId', { "src": require("../../images/oldPhotos/P13.jpg") });

        this.state = {
            isList: 1,
            initialFontSize: 20,
            visible: false,
            x: new Animated.Value(0),
            pageNo: newPageNo
        }
    }
    componentWillReceiveProps(nextProps) {
        const { navigation } = nextProps;
        const newPageNo = navigation.getParam('imageId', 0);
        this.setState({
            pageNo: newPageNo,
        })
    }
    setPage = (pageType) => {
        let { pageNo, x } = this.state;

        switch (pageType) {
            case "prev": {
                pageNo--;
                if (pageNo == 0)
                    pageNo = imageList.length
                x = new Animated.Value(-width)
                break;
            }
            case "next": {
                pageNo++;
                if (pageNo == imageList.length + 1) {
                    pageNo = 1
                }
                x = new Animated.Value(width)
                break;
            }
            default: break;
        }
        this.setState({
            pageNo,
            x,
            isList: 0

        }, () => {
            Animated.timing(this.state.x, {
                toValue: 0,
            }).start();
            this.setState({
                visible: true,
            });
        });
    }
    renderPage = () => {
        let { pageNo } = this.state;
        return (
            <Animated.View
                style={[{
                    flex: 1, width: width - 16, height: height - 16, backgroundColor: '#ffffff',
                    margin: 8, padding: 10, alignItems: 'center', justifyContent: 'center', elevation: 5
                }, {
                    transform: [
                        {
                            translateX: this.state.x
                        }
                    ]
                }]}
            >

                <View style={{
                    width, height: height - 250, backgroundColor: "white",
                    justifyContent: 'center', alignItems: 'center', marginTop: 50, marginBottom: 150
                }}>
                    <Image style={{ width, height: height - 250, }}
                        source={pageNo}
                        resizeMode='contain'
                    >
                    </Image>
                </View>
            </Animated.View>
        )
    }
    goBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Gallery');
    }
    showToast = () => {
        //ToastAndroid.showWithGravity('chan photo', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
    render() {
        return (
            <View style={{
                flex: 1, width, height,

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
                            fontFamily: 'Laila-Bold'
                        }}>
                            {`कांबेकर महाराज फोटो गॅलरी`}
                        </Text>

                    </View>
                </View>

                {this.renderPage()}

                <View style={{
                    width, height: 50, position: 'absolute', alignItems: 'center',
                    bottom: 0, left: 0, flexDirection: "row", backgroundColor: '#e9fcf6', elevation: 5
                }}>
                    <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("prev")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>मागे</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("next")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>पुढे</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                    {/* <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("next")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>पुढे</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                   <View style={style.fontView}>
                        <TouchableOpacity onPress={() => this.setPage("next")}>
                            <View style={style.fontButton}>
                                <Text style={{ fontSize: 20, color: 'black' }}>पुढे</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>)
    }
}

