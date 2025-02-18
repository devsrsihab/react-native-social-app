import {View, Text, Image} from 'react-native';
import React from 'react';
import {TUserPost} from '../../schema';
import UserProfile from '../UserProfileImage/UserProfile';
import userPostStyle from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {horizontalScall} from '../../assets/styles/scaling';

const UserPost = ({
  firstName,
  lastName,
  location,
  likes,
  comments,
  bookmarks,
  image,
  profileImage,
}: TUserPost) => {
  return (
    <View style={userPostStyle.userPostWrapper}>
      {/* post header */}
      <View style={userPostStyle.userPostHeader}>
        <View style={userPostStyle.userPostHeaderWithProfile}>
          <UserProfile image={profileImage} dimentions={horizontalScall(48)} />
          <View>
            <Text style={userPostStyle.userNames}>
              {firstName} {lastName}
            </Text>
            <Text style={userPostStyle.userLocation}>{location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsis} color="#79869F" size={24} />
      </View>

      {/* post body */}
      <View style={userPostStyle.userPostBody}>
        <Image style={userPostStyle.userPostImage} source={image} />
      </View>
      {/* post footer */}
      <View style={userPostStyle.userPostFooter}>
        <View style={userPostStyle.userPostFooterIcons}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" size={16} />
          <Text>{likes}</Text>
        </View>
        <View style={userPostStyle.userPostFooterIcons}>
          <FontAwesomeIcon icon={faComment} color="#79869F" size={16} />
          <Text>{comments}</Text>
        </View>
        <View style={userPostStyle.userPostFooterIcons}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" size={16} />
          <Text>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
