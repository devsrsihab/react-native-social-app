import {View, Image} from 'react-native';
import React from 'react';
import userProfileStyle from './style';

const UserProfile = ({image, dimentions}: {image: any; dimentions: number}) => {
  return (
    <View
      style={[
        userProfileStyle.userProfileImageWrapper,
        {borderRadius: dimentions},
      ]}>
      <Image
        style={[
          userProfileStyle.userProfileImage,
          {width: dimentions, height: dimentions},
        ]}
        source={image}
      />
    </View>
  );
};

export default UserProfile;
