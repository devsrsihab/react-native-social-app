import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './naginations/MainNavigation';
const App: React.FC = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
