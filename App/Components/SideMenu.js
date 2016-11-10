import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, View,Text, TouchableOpacity } from 'react-native';

import colors from './../Utils/Colors';

let width = Dimensions.get('window').width;

export default class SideMenu extends Component {
  _searchByCategory(category) {
    this.props.searchData(category);
  }

  render(){
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Animes</Text>
        </View>

        <ScrollView contentContainerStyle={styles.containerBody}>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'Full Metal Alquemist episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Full Metal Alquemist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'Bleach episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Bleach
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'One piece episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              One piece
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'Pokemon episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Pokemon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'Digimon episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Digimon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'DBZ episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Dragon Ball Z
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'One Punch Man episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              One Punch Man
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._searchByCategory.bind(this, 'Ataque a los titanes episode 1')} underlayColor='transparent'>
            <Text style={styles.name}>
              Ataque a los titanes
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerHeader:{
    padding: 22.2,
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  containerBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  name: {
    marginLeft: 20,
    width: width,
    padding: 10
  }
});
