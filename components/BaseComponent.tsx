import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getFontFamily from '../assets/fonts/getFontFamily';

const BaseComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Base Component</Text>
    </View>
  );
};

export default BaseComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  baseText: {
    fontSize: 43,
    color: 'red',
    fontFamily: getFontFamily('Inter', '900'),
  },
});
