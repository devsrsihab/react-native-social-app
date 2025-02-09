import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ListRenderItem,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';

type UserProfile = {
  firstName: string;
  id: number;
  profileImage: any; // Can be `string` if using remote URLs or `any` for require() imports
};

const userStories: UserProfile[] = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nicolas',
    id: 6,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const App: React.FC = (): React.JSX.Element => {
  const renderItem: ListRenderItem<UserProfile> = ({item}) => (
    <UserStory image={item.profileImage} userName={item.firstName} />
  );

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* Header */}
        <View style={globalStyle.header}>
          <Title title="Let’s Explore" />
          <View style={globalStyle.messageIconContainer}>
            <View style={globalStyle.messageIconInnerContainer}>
              <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={25} />
              <View style={globalStyle.messageNumberWrapper}>
                <Text style={globalStyle.messageNumber}>5</Text>
              </View>
            </View>
          </View>
        </View>

        {/* User Stories */}
        <View style={globalStyle.userStoriesContainer}>
          <FlatList
            data={userStories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
