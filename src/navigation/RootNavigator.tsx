import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { colors } from '../theme/theme';

import SplashScreen from '../screens/SplashScreen';
import RoleSelectScreen from '../screens/RoleSelectScreen';

import ChefHomeScreen from '../screens/chef/ChefHomeScreen';
import AddMenuItemScreen from '../screens/chef/AddMenuItemScreen';
import MenuItemsScreen from '../screens/chef/MenuItemsScreen';
import ManageMenuScreen from '../screens/chef/ManageMenuScreen';
import ChefSettingsScreen from '../screens/chef/ChefSettingsScreen';

import GuestHomeScreen from '../screens/guest/GuestHomeScreen';
import BrowseMenusScreen from '../screens/guest/BrowseMenusScreen';
import ViewDishesScreen from '../screens/guest/ViewDishesScreen';
import FilterCoursesScreen from '../screens/guest/FilterCoursesScreen';
import GuestSettingsScreen from '../screens/guest/GuestSettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.background,
    text: colors.textPrimary,
    border: colors.cardBorder,
    primary: colors.accent,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />

        <Stack.Screen name="ChefHome" component={ChefHomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        <Stack.Screen name="MenuItems" component={MenuItemsScreen} />
        <Stack.Screen name="ManageMenu" component={ManageMenuScreen} />
        <Stack.Screen name="ChefSettings" component={ChefSettingsScreen} />

        <Stack.Screen name="GuestHome" component={GuestHomeScreen} />
        <Stack.Screen name="BrowseMenus" component={BrowseMenusScreen} />
        <Stack.Screen name="ViewDishes" component={ViewDishesScreen} />
        <Stack.Screen name="FilterCourses" component={FilterCoursesScreen} />
        <Stack.Screen name="GuestSettings" component={GuestSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
