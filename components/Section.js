/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  ListView,
  Text,
  Image,
  View,
  RefreshControl,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { Header, Badge, Card, ListItem, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import styles from "./Styles";

const ReaderStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class Section extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:  true,
      refreshing: false,
    }
  }

  static navigationOptions = {
    title: 'Reader',
    headerTintColor: '#2F95D6',
    headerStyle: {
      backgroundColor:   '#ffffff',
      borderBottomColor: '#2F95D6',
      borderBottomWidth: 3
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };

  _onRefresh() {
    this.setState({refreshing: true});
    this.getSectionData().then(() => {
      this.setState({refreshing: false});
    });
  }

  _onPressCard() {
    Alert.alert('You tapped a card.')
  }

  getSectionData() {

    return fetch('https://projects.hearstnp.com/open/api/v1/collection.php?site=houstonchronicle&section=entertainment')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.response),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getSectionData();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, padding: 0, margin: 0 }}>
        <ReaderStatusBar backgroundColor="#5E8D48" barStyle="default" />
        <ListView style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={ (rowData) => 
            <Card style={styles.card} >
              <TouchableOpacity
                 style={styles.wrapper}
                 onPress={ this._onPressCard }>
                <View>
                  <Image 
                    ref={rowData.id} 
                    source={{uri: rowData.media.image.thumbnail || rowData.media.image.full }} 
                    style={styles.fullWidthImage} />
                  <Text h2 style={ styles.title }>{rowData.title}</Text>
                </View>
              </TouchableOpacity>
            </Card>
          }
        />
      </View>
    );
  }
}
