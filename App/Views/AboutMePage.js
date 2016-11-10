import React, {Component} from 'react';
import { Linking, Platform, ScrollView, View } from 'react-native';

// 3rd party libraries
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

// Component
import Header from './../Components/Header';

export default class AboutMe extends Component{
  onShareApp() {
    Share.open({
      title: 'AnimeVideo App',
      message: 'AnimeVideo App - Watch and organize your animes without worries.',
      url: '',
      subject: 'Share Link',
    }, (e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#EFEFF4',}}>
        <Header
            title="Acerca de la App"
            leftText = {<Icon name='angle-left' size={25} color="#fff"/>}
            onLeftPress={ () => this.props.navigator.pop() }
        ></Header>
        <ScrollView style={{marginTop: 65}}>
          <TableView>
            <Section header={'Info'}>
              <Cell
                cellStyle="RightDetail"
                title={'Version'}
                detail={'1.0.0'}
              />
            </Section>

            <Section header={'Others'}>
              <Cell
                cellStyle="Basic"
                title={'Share this cool app!'}
                onPress={() => this.onShareApp() }
              />
              <Cell
                cellStyle="Basic"
                title={'Download'}
                onPress={() => Linking.openURL(Platform.OS === 'ios' ? '' : '') }
              />
              <Cell
                cellStyle="Basic"
                title={'Source code'}
                onPress={() => Linking.openURL('') }
              />
              <Cell
                cellStyle="Basic"
                title={'About the developer'}
                onPress={() => alert('Made by John Paul Machahuay Giraldo') }
              />
            </Section>
          </TableView>
        </ScrollView>
      </View>
    );
  }
}
