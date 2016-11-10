import React, { Component } from 'react';

import { ListView, Platform, StatusBar, View } from 'react-native';

import Drawer from "react-native-drawer";
import Icon from 'react-native-vector-icons/FontAwesome'

import AboutMePage from './AboutMePage';
import Header from './../Components/Header';
import SearchBar from './../Components/SearchBar';
import SideMenu from './../Components/SideMenu'
import VideoList from './../Components/VideoList';
import Loader    from './../Components/Loader';
import Api       from './../Utils/Api'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentDidMount() {
    this._searchData.call(this, 'johnprog John Paul');
  }

  render() {
    const { videos } = this.state;
    return (
      <Drawer
        closedDrawerOffset={0}
        tweenDuration={220}
        tweenEasing={'easeInQuad'}
        tweenHandler={ratio => ({
          main: {
            opacity: 1,
          },
          mainOverlay: {
            opacity: ratio / 2,
            backgroundColor: 'black',
          },
        }) }
        captureGestures={true}
        panOpenMask={0.05}
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<SideMenu searchData={this._searchData.bind(this)} />}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        onOpen={ ()=> StatusBar.setHidden(true, 'slide') }
        onClose={ ()=> StatusBar.setHidden(false, 'slide') }
        styles={{shadowColor: 'red', shadowOpacity: 0.5, shadowRadius: 3}}>
        <View style={{flex: 1}}>
          <Header
              title="Animes"
              leftText = {<Icon name='bars' size={20} color="#fff"/>}
              onLeftPress={ () => {this._drawer.open()} }
              rightText = {<Icon name="info-circle" size={20} color="#fff"/>}
              onRightPress={ () => this.props.navigator.push({component: AboutMePage}) } />
          <SearchBar onSubmit={this._searchData.bind(this)}/>
          <VideoList
            items={ this.state.videos }
            navigator={this.props.navigator} />
          <Loader visible={this.state.isLoading} />
        </View>
      </Drawer>
    )
  }
  _searchData(query) {
    this._drawer.close();
    this.setState({isLoading: true, videos: this.state.videos.cloneWithRows([])});
    Api.search(query)
    .then(data => {
      this.setState({
        videos: this.state.videos.cloneWithRows(data.items),
        isLoading: false
      });
    });
  }
}
