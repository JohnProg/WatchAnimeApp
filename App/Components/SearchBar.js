import React, { Component } from 'react';

import { TextInput, View } from 'react-native';

import styles from './../Styles/searchBar.style'

export default class SearchBar extends Component {
   constructor(props) {
     super(props);
     this.state = { searchValue: '' };
   }

   render() {
     return (
         <TextInput
           placeholder={'Search...'}
           returnKeyType={'search'}
           style={ styles.inputSearch }
           value={ this.state.searchValue }
           onSubmitEditing={this._onSubmit.bind(this)}
           blurOnSubmit={true}
           autoCorrect={false}
           autoCapitalize="none"
           onChangeText={ searchValue => this.setState({searchValue}) }
         />
     )
   }

   _onSubmit() {
     this.props.onSubmit(this.state.searchValue)
     this.setState({searchValue: ''});
   }
 };
