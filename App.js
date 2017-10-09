/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  ListView,
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';

import { Header, Badge, Card, ListItem, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import ArticleScreen from './components/Article';
import SectionScreen from './components/Section';

const ReaderApp = StackNavigator({
    Section: { screen: SectionScreen },
    Article: { screen: ArticleScreen }
});

export default class App extends React.Component {
    render() {
        return <ReaderApp />;
    }
}



// import { Badge, Card, Button } from "react-native-elements";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// 
//   headline: {
//     textAlign: 'left',
//     color: '#333333',
//     fontSize: 18, 
//     fontWeight: 'bold',
//     margin: 10
//   },
// });
// 
// export default class Movies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }
// 
//   componentDidMount() {
//     // return fetch('https://facebook.github.io/react-native/movies.json')
//     return fetch('https://summize.xyz/tmp/sfgate.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson.response),
// 	          // dataSource: ds.cloneWithRows(responseJson.movies),
//         }, function() {
//           // do something with new state
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// 
//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
// 
// 
//   // renderItem(response, i) {
//   //   const { taxonomy } = response;
//   //   const { navigate } = this.props.navigation; 
//   // 
//   //   return (
//   //     <Card key={`article-${i}`}>
//   //       <Header {...response} />
//   //       <ImageCard {...response} />
//   //       <Tags {...taxonomy} />
//   //       <Button onPress={ () => { navigate("Article"); }  } title="View Article" color="#111111" />
//   //     </Card>
//   //   );
//   // }
// 
// //   <Button onPress={ () => { navigate("Article"); }  } title="View Article" color="#111111" />
// 
//     return (
//       <View style={{ flex: 1, padding: 0, margin: 0 }}>
//         <Text style={{ height: 68 }}>Loading...</Text>
//         <ListView style={{ flex: 1 }}
//           dataSource={this.state.dataSource}
//           renderRow={ (rowData) => <Card style={{ margin: 0, padding: 0 }} >
//                <Image 
//                  source={{uri: 'https://static01.nyt.com/images/2017/10/09/world/09catalonia-7/09catalonia-7-superJumbo.jpg'}}
//                  style={{width: 340, height: 220}} />
//                <Text h2 style={ styles.headline }>{rowData.title}</Text>
//                <Text>{rowData.id}</Text>
//             </Card>
//           }
//         />
//       <Header 
//         statusBarProps={{ barStyle: 'light-content' }}
//         backgroundColor="black"
//         leftComponent={{ icon: 'menu', color: '#fff' }}
//         centerComponent={{ text: 'Reader', style: { color: '#fff' } }}
//         rightComponent={{ icon: 'home', color: 'red' }}
//       />
//       </View>
//     );
//   }
// }
// 
// 
// // const instructions = Platform.select({
// //   ios: 'Press Cmd+R to reload this,\n' +
// //     'Cmd+D or shake for dev menu',
// //   android: 'Double tap R on your keyboard to reload,\n' +
// //     'Shake or press menu button for dev menu',
// // });
// 
// // export default class App extends Component<{}> {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.welcome}>
// //           Welcome to React Native!
// //         </Text>
// //         <Text style={styles.instructions}>
// //           To get started, edit App.js
// //         </Text>
// //         <Text style={styles.instructions}>
// //           {instructions}
// //         </Text>
// //       </View>
// //     );
// //   }
// // }
// 
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });
