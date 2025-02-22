import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import profileStyle from './style';
import {ProfileTabNavigator} from '../../naginations/MainNavigation';

const Profile = () => {
  return (
    <>
      <SafeAreaView style={[globalStyle.flex, globalStyle.bgWhite]}>
        <ScrollView
          contentContainerStyle={[globalStyle.flexGrow, globalStyle.bgWhite]}>
          {/* Profile Image */}
          <View style={profileStyle.profileImageContainer}>
            <View style={profileStyle.profileImageContent}>
              <Image
                style={profileStyle.profileImage}
                source={require('../../assets/images/default_profile.png')}
              />
            </View>
          </View>

          {/* Username */}
          <View>
            <Text style={profileStyle.userName}>Emmanuel Robertsen</Text>
          </View>

          {/* Profile Stats */}
          <View style={profileStyle.stateContainer}>
            <View style={profileStyle.state}>
              <Text style={profileStyle.stateTitle}>45</Text>
              <Text style={profileStyle.stateType}>Following</Text>
            </View>
            <View style={profileStyle.state}>
              <Text style={profileStyle.stateTitle}>30M</Text>
              <Text style={profileStyle.stateType}>Followers</Text>
            </View>
            <View style={profileStyle.state}>
              <Text style={profileStyle.stateTitle}>100</Text>
              <Text style={profileStyle.stateType}>Posts</Text>
            </View>
          </View>

          {/* Profile Tabs */}
          <View style={profileStyle.tabContainer}>
            <ProfileTabNavigator />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
