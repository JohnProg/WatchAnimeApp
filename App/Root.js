import React, { Component } from 'react';

import { Navigator } from 'react-native';

import HomePage from './Views/HomePage'

export default class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{ name: 'HomePage', component: HomePage }}
          configureScene={ (route) => Navigator.SceneConfigs.PushFromRight }
          renderScene={ (route, navigator) => {
              const RouteComponent = route.component;
              return (
                  <RouteComponent { ...route.passProps } navigator={ navigator }></RouteComponent>
              );
          } }
      />
    )
  }
}
