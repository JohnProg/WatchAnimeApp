const ReactNative = require('react-native');

import React, {Component} from 'react';

const { ActivityIndicator, Text, View, WebView } = ReactNative;

// Third parties
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'

// Components
import Header from './../Components/Header';
import styles from './../Styles/videoListItem.style';
import VideoList from './../Components/VideoList';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { showSpinner: true, selectedVideo: this.props.video }
  }
  render() {
    let {key, videos, navigator} = this.props;
    let video = this.state.selectedVideo;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <WebView
          style={{backgroundColor: 'black', marginTop: 63, height: 180}}
          source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}?showinfo=0&rel=0` }}
          onLoadStart={ () => this.setState({showSpinner: true}) }
          onLoadEnd={ () => this.setState({showSpinner: false})  } />
        {this.state.showSpinner && <ActivityIndicator style={{position: 'absolute', top: 140, right: 0, left: 0}} animating={this.state.showSpinner} size='large' />}
        <View style={[styles.videoContainer, {paddingLeft: 15, paddingRight: 15, paddingTop: 0, marginTop: 180, paddingBottom: 0, borderColor: '#e1e2e3', borderBottomWidth: 1,}]}>
          <View style={ styles.videoIconChannelContainer }>
            <View style={ [styles.videoIconChannel, {marginTop: 5}] }>
            </View>
          </View>

          <View style={ styles.videoTextContainer }>
            <Text style={ styles.videoTitle }> { video.snippet.title } {this.showSpinner} </Text>
            <Text style={ styles.videoDescription }>
              { ((video.snippet.channelTitle).length > 30) ? (((video.snippet.channelTitle).substring(0, 30 - 3)) + '...') : video.snippet.channelTitle }
              - {Moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>

        <View style={{flex: 5, flexDirection: 'column'}}>
          <VideoList
            items={ videos }
            navigator={navigator}
            style={{marginTop: 0}}
            type='grid'
            onVideoSelect={ selectedVideo => {
              this.setState({selectedVideo});
            } } />
        </View>

        <Header
            title={ video.snippet.title }
            leftText = {<Icon name='angle-left' size={30} color="#fff"/>}
            onLeftPress={ () => {navigator.pop();} } />
      </View>
    )
  }
}
