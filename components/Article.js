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

import { Header, Badge, Card, ListItem, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  headline: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 18, 
    fontWeight: 'bold',
    margin: 10
  },
});


const ReaderStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  static navigationOptions = {
    title: 'Reader',
    headerTintColor: '#2F95D6',
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomColor: '#2F95D6',
      borderBottomWidth: 3
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };

  componentDidMount() {
    return fetch('https://summize.xyz/tmp/sfgate.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.response),
	          // dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

/* barStyle = light-content default */

    return (
      <View style={{ flex: 1, padding: 0, margin: 0 }}>
        <ReaderStatusBar backgroundColor="#5E8D48" barStyle="default" />
        <ListView style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={ (rowData) => <Card style={{ margin: 0, padding: 0 }} >
               <Image 
                 source={{uri: 'https://static01.nyt.com/images/2017/10/09/world/09catalonia-7/09catalonia-7-superJumbo.jpg'}}
                 style={{width: 340, height: 220}} />
               <Text h2 style={ styles.headline }>{rowData.title}</Text>
               <Text>{rowData.id}</Text>
               <Text>{rowData.excerpt}</Text>
            </Card>
          }
        />
      </View>
    );
  }
}
