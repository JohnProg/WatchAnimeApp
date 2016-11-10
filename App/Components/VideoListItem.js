import React, {Component} from 'react';

import { Image, View, Text, TouchableOpacity } from 'react-native';

// 3rd party libraries
import Moment from 'moment';

// Component
import Detail from './../Views/DetailPage'
import styles from './../Styles/videoListItem.style'

const VideoListItem = ({video, videos, navigator, type='list', onVideoSelect}) => {
  _showListVersion = (video) => {
    return (
      <View style={ styles.listItem }>
        <Image
          style={ styles.videoImage }
          source={ {uri: video.snippet.thumbnails.high.url} } />
        <View style={ styles.videoContainer }>
          <View style={ styles.videoIconChannelContainer }>
            <View style={ styles.videoIconChannel }>
            </View>
          </View>
          <View style={ styles.videoTextContainer }>
            <Text style={ styles.videoTitle }>
              { ((video.snippet.title).length > 30) ? (((video.snippet.title).substring(0, 32 - 3)) + '...') : video.snippet.title }
            </Text>
            <Text style={ styles.videoDescription }>
              { ((video.snippet.channelTitle).length > 30) ? (((video.snippet.channelTitle).substring(0, 30 - 3)) + '...') : video.snippet.channelTitle }
              - {Moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    )
  }
  _showGridVersion = (video) => {
    return (
      <View style={ [styles.listItem, {paddingTop: 0}] }>
        <View style={ styles.videoContainer }>
          <View style={ [styles.videoIconChannelContainer, {flex: 2}] }>
            <Image
              source={ {uri: video.snippet.thumbnails.default.url, width: 120, height: 90} } />
          </View>
          <View style={ [styles.videoTextContainer, {flex: 3}] }>
            <Text style={ styles.videoTitle }>
              { ((video.snippet.title).length > 30) ? (((video.snippet.title).substring(0, 32 - 3)) + '...') : video.snippet.title }
            </Text>
            <Text style={ styles.videoDescription }>
              { ((video.snippet.channelTitle).length > 30) ? (((video.snippet.channelTitle).substring(0, 30 - 3)) + '...') : video.snippet.channelTitle }
              - {Moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <TouchableOpacity
      style={ styles.container }
      onPress={ () => {
        if(onVideoSelect) onVideoSelect(video);

        if(type === "list") {
          navigator.push({ component: Detail, passProps: {video: video, videos: videos}})
        }
      } }>
      { type === "list" ? this._showListVersion(video) : this._showGridVersion(video) }
    </TouchableOpacity>
  )
}

export default VideoListItem;
