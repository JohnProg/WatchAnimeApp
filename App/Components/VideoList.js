const ReactNative = require('react-native');

import React         from 'react';
import VideoListItem from './VideoListItem';

const {
  ListView,
 } = ReactNative;

const VideoList = ({items, navigator, style, type, onVideoSelect}) => {
   renderRow = (video, sId, rId) => {
     return (
       <VideoListItem
         key={ rId }
         video={ video }
         videos={ items }
         navigator={navigator}
         type={type}
         onVideoSelect={ onVideoSelect }
       />
     );
   };

   return (
     <ListView
       dataSource={ items }
       enableEmptySections
       renderRow={ this.renderRow }
       style={[style]} />
   )
 }

 export default VideoList;
