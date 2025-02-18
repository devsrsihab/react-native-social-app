import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import getFontFamily from '../assets/fonts/getFontFamily';
import {horizontalScall, scaleFontSize} from '../assets/styles/scaling';

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
    padding: horizontalScall(12),
  },
  baseText: {
    fontSize: scaleFontSize(43),
    color: 'red',
    fontFamily: getFontFamily('Inter', '900'),
  },
});
