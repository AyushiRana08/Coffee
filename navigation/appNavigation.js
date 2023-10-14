import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox, Text, View, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductScreen from '../components/ProductScreen';
import { themeColors } from '../theme/index';
import CartScreen from '../components/CartScreen';
import FavouriteScreen from '../components/FavouriteScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreLogs(['Non-serialize values were found in the navigation state']);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
        <Stack.Screen
          name="Product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 30,
          borderRadius: 60,
          backgroundColor: themeColors.bgLight,
          marginHorizontal: 20,
        },
        tabBarItemStyle: {
          marginTop: 30,
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  const iconSize = 40;
  const containerSize = iconSize + 16; // Adjust the container size as needed

  let icon;

  if (route.name == 'Home') {
    icon = focused? <Icon name="home" color={themeColors.bgDark} size={iconSize} /> : <Icon name="home" color={themeColors.bgDark} size={iconSize} />;
  } else if (route.name == 'Favourite') {
    icon = focused? <Icon name="heart" color={themeColors.bgDark} size={iconSize} /> : <Icon name="heart" color={themeColors.bgDark} size={iconSize} />;
  } else if (route.name == 'Cart') {
    icon = focused? <Icon name="shopping-cart" color={themeColors.bgDark} size={iconSize} /> : <Icon name="shopping-cart" color={themeColors.bgDark} size={iconSize} />;
  }

  let buttonClass = focused ? "" :white.white;

  return (
    <View
      style={{
        width: containerSize,
        height: containerSize,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: containerSize / 2,
        overflow: 'visible',
        backgroundColor: 'white' + buttonClass,
        shadowOpacity: 0.4,
        padding:3,
        opacity: 0.9,
      }}>
      {icon}
    </View>
  );
};

const white = StyleSheet.create({
  white: {
    backgroundColor: 'white',
  },
});
