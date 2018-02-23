
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import store from 'react-native-simple-store';

import {
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  ListView,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View,
  ActivityIndicator,
  StyleSheet,
  NativeModules,
  AsyncStorage
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import Camera from 'react-native-camera';
import CropImage from 'react-native-cropimage';
import ImageCrop from 'react-native-image-crop';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';
import config from '../lib/config';
import LoadingContainer from 'react-native-loading-container';
import LoadingOverlay from '../widgets/loadingoverlay';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

// map redux store to props
function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

// map actions to props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Auth: bindActionCreators(AuthAction, dispatch),
    }
  }
}

class TagMap extends Component {
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      jsonURL: config.HOST_API.otherUrl + '/api/Tours/GetTours',
      dataSource: ds.cloneWithRows(['row1', 'row2']),
    };
  }

  componentDidMount() {
    this.loadJSONData();
  }

  componentWillUnmount() {
  }

  backPage = () => {
    Actions.takepicture();
  }

  setData(key, value) {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  backToPost(mapID) {
    alert('Map ' + mapID + ' is tagged');
    this.setData('mapID', mapID);
    Actions.postcomment();
  }

  loadJSONData() {
    fetch(this.state.jsonURL, {method: "GET"})
      .then((response) => response.json())
      .then((responseData) =>
      {
        console.log(responseData);
        this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData)});
      })
      .done(() => {

      });
  }

  render() {
    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(map) => this.renderMap(map)}
        />
    )
  }

  renderMap(map) {
    return (
      <View style={styles.listItem}>
        <View style={styles.listLeft}>
          <Text style={styles.listText}>{map.Name}</Text>
        </View>
        <View style={styles.listRight}>
          <TouchableHighlight onPress={() => this.backToPost(map.ID)}>
            <Image style={styles.next_arrow}
            source={require('../assets/next_arrow.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#042313'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2
  },
  listLeft: {
    flex: 0.8,
    justifyContent: 'center',
  },
  listRight: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10
  },
  next_arrow: {
    width: 30,
    height: 20,
  },
  listText: {
    color: 'gray',
    fontSize: 20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TagMap);
