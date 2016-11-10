import {
  StyleSheet,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  inputSearch: {
    flex: 0.01,
    height: 40,
    marginTop: 80,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    flexDirection: 'column',
    padding: 5,
    borderColor: 'gray',
    borderWidth: (Platform.OS === 'ios') ? 1 : 0,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  }
});

module.exports = styles;
