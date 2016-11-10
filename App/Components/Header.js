'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

// Utils
import colors from './../Utils/Colors';

const { width, height } = Dimensions.get('window');

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
        title,
        onTitlePress,
        leftText,
        onLeftPress,
        rightText,
        onRightPress,
    } = this.props;
    return (
        <View style={styles.container}>
            <View style={ styles.status }></View>
            <StatusBar
                translucent={true}
                barStyle="light-content"
                showHideTransition='slide'
                hidden={ false }
            />
            <View style={ styles.title }>
                <TouchableOpacity
                    style={styles.button}
                    onPress={ onLeftPress }>
                    <Text>{ leftText }</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={ [{ flex: 4 }] }
                    onPress={ onTitlePress }>
                    <Text style={styles.text}>{ title }</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={styles.button}
                    onPress={ onRightPress }>
                    <Text>{ rightText }</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 64,
    backgroundColor: colors.blue,
    borderBottomWidth: 1,
    borderColor: colors.blue,
  },
  status: {
    flex: 6,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 11,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: colors.white
  },
});
