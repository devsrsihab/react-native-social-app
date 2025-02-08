import {Text, View} from 'react-native';
import React from 'react';
import {style} from './style';

const Title = ({title}: {title: string}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Title;
