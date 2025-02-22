import {Text, View} from 'react-native';
import React from 'react';
import {pfofileTabTitleStyle} from './style';

interface ProfileTabTitleProps {
  title: string;
  isForcused: boolean;
}

const ProfileTabTitle = ({title, isForcused}: ProfileTabTitleProps) => {
  return (
    <View>
      <Text
        style={[
          pfofileTabTitleStyle.title,
          !isForcused && pfofileTabTitleStyle.inActivetitle,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default ProfileTabTitle;
