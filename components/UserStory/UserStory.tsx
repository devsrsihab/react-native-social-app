import {View, Text, Image} from 'react-native';
import React from 'react';
import userStoryStyle from './styele';

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
      <View style={userStoryStyle.userStoryImageWrapper}>
        <Image style={userStoryStyle.userStoryImage} source={image} />
      </View>
      <Text style={userStoryStyle.userName}>{userName}</Text>
    </View>
  );
};

export default UserStory;
