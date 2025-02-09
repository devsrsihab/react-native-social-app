import {View, Text} from 'react-native';
import React from 'react';
import userStoryStyle from './styele';
import UserProfile from '../UserProfileImage/UserProfile';

interface UserStoryProps {
  image: any;
  userName: string;
}

const UserStory: React.FC<UserStoryProps> = ({
  image,
  userName,
}: UserStoryProps) => {
  return (
    <View style={userStoryStyle.userStoryWrapper}>
      <UserProfile dimentions={65} image={image} />
      <Text style={userStoryStyle.userName}>{userName}</Text>
    </View>
  );
};

export default UserStory;
