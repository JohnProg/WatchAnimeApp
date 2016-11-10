import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 130,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center', // align horizontal
    justifyContent: 'center', // align vertical
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  }
});

module.exports = styles;
