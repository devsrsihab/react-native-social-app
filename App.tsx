import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
