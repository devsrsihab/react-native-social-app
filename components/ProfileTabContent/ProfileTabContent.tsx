import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import {profileTabContentStyle} from './style';
import globalStyle from '../../assets/styles/globalStyle';

const ProfileTabContent = () => {
  return (
    <ScrollView style={globalStyle.bgWhite}>
      <View style={profileTabContentStyle.tabContentContainer}>
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={profileTabContentStyle.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
