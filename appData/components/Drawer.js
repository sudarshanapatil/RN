// import React from 'react';
// import {
// 	View,
// 	Text,
// 	Dimensions
// } from 'react-native';
// import {
// 	createDrawerNavigator,
// 	createAppContainer,

// } from 'react-navigation';

// //import Charitra from './appData/components/Chatritra'
// // import Abhang from './appData/components/Abhang'
// // import Parampara from './appData/components/Parampara'
// // import FullAbhang from './appData/components/FullAbhang'
// // import Gallery from './appData/components/Gallery'
// // import Videos from './appData/components/Videos'
// // import Audios from './appData/components/Audios'
// // import Docs from './appData/components/Docs'
// // import FullImage from './appData/components/FullImage';
// // import PhotoList from './appData/components/PhotoList'
// // import Aarati from './appData/components/Aarati'
// // import newHome from './appData/components/newHome'
// // import Others from './appData/components/Others'
// // import Festivals from './appData/components/Festivals'

// const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;

// const RouteConfigs = {
// 	// newHome: {
// 	// 	screen: newHome
// 	// },
// 	// Abhang: {
// 	// 	screen: Abhang
// 	// },
// 	// Others: {
// 	// 	screen: Others
// 	// },
// 	// Festivals: {
// 	// 	screen: Festivals
// 	// },
// 	// Aarati: {
// 	// 	screen: Aarati
// 	// },
// 	// Gallery: {
// 	// 	screen: Gallery
// 	// },
// 	// Videos: {
// 	// 	screen: Videos
// 	// }
// };

// class Drawer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {

// 		}
// 	}

// 	render() {
// 		return (
// 			<View style={{ flex: 1, width: 300 }}>
// 				<Text>{'Menu'}</Text>
// 			</View >
// 		);
// 	}
// }


// const DrawerNavigatorConfigs = {
// 	drawerWidth: DRAWER_WIDTH,
// 	drawerPosition: "left",
// 	drawerType: "slide",
// 	edgeWidth: 30,
// 	drawerLockedMode: 'unlocked',
// 	contentOptions: {
// 		itemStyle: {
// 			height: 50
// 		},
// 		labelStyle: {
// 			fontSize: 16,
// 			fontFamily: 'Sahitya-Bold',
// 			fontWeight: 'normal'
// 		}
// 	},
	
// };

// const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfigs);

// export default createAppContainer(DrawerNavigator);