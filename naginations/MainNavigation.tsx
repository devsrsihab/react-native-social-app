/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import {Routes} from './Route';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

// profile tab navigatios
export const ProfileTabNavigator = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: {zIndex: 0, elevation: 0},
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isForcused={focused} title="Photos" />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab2"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isForcused={focused} title="Videos" />
          ),
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name="Tab3"
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isForcused={focused} title="Saved" />
          ),
        }}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        header: () => null,
        headerShown: false,
        swipeEdgeWidth: 50, // Adjust swipe sensitivity
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,

        animation: 'slide_from_right', // Ensure animations are enabled
      }}>
      <Stack.Screen name="MainDrawer" component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
