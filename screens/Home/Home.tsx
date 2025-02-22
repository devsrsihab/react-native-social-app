import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import homeStyle from './style';
import UserStory from '../../components/UserStory/UserStory';
import {TUserPost} from '../../schema';
import UserPost from '../../components/UserPost/UserPost';
import {scaleFontSize} from '../../assets/styles/scaling';
import 'react-native-gesture-handler';
import {Routes} from '../../naginations/Route';
import globalStyle from '../../assets/styles/globalStyle';

type UserProfile = {
  firstName: string;
  id: number;
  profileImage: any; // Can be `string` if using remote URLs or `any` for require() imports
};

const userStories: UserProfile[] = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    id: 6,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: require('../../assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: require('../../assets/images/default_profile.png'),
  },
];

const userPosts: TUserPost[] = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Boston, MA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../../assets/images/default_profile.png'),
    id: 1,
  },
  {
    firstName: 'Jennifer',
    lastName: 'Wilkson',
    location: 'Worcester, MA',
    likes: 1301,
    comments: 25,
    bookmarks: 70,
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../../assets/images/default_profile.png'),
    id: 2,
  },
  {
    firstName: 'Adam',
    lastName: 'Spera',
    location: 'Worcester, MA',
    likes: 100,
    comments: 8,
    bookmarks: 3,
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../../assets/images/default_profile.png'),
    id: 3,
  },
  {
    firstName: 'Nata',
    lastName: 'Vacheishvili',
    location: 'New York, NY',
    likes: 200,
    comments: 16,
    bookmarks: 6,
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../../assets/images/default_profile.png'),
    id: 4,
  },
  {
    firstName: 'Nicolas',
    lastName: 'Namoradze',
    location: 'Berlin, Germany',
    likes: 2000,
    comments: 32,
    bookmarks: 12,
    image: require('../../assets/images/default_post.png'),
    profileImage: require('../../assets/images/default_profile.png'),
    id: 5,
  },
];

const Home = ({navigation}: {navigation: any}): React.JSX.Element => {
  const renderItem: ListRenderItem<UserProfile> = ({item}) => (
    <UserStory image={item.profileImage} userName={item.firstName} />
  );

  return (
    <SafeAreaView style={globalStyle.bgWhite}>
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              {/* Header */}
              <View style={homeStyle.header}>
                <Title title="Let’s Explore" />
                <View style={homeStyle.messageIconContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(Routes.Profile);
                    }}
                    style={homeStyle.messageIconInnerContainer}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="#CACDDE"
                      size={scaleFontSize(25)}
                    />
                    <View style={homeStyle.messageNumberWrapper}>
                      <Text style={homeStyle.messageNumber}>5</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* User Stories */}
              <View style={homeStyle.userStoriesContainer}>
                <FlatList
                  data={userStories}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </>
        }
        data={userPosts}
        renderItem={({item}) => (
          <View style={homeStyle.userPostsContainer}>
            {/* user post */}
            <UserPost key={item.id} {...item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
