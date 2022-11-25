import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Booking from './tabComponents/Booking';
import Queue from './tabComponents/Queue';
import History from './tabComponents/History';
import Calendar from './tabComponents/Calendar';
import Display from '../helper/Display';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';

const Tab = createMaterialTopTabNavigator();
const TopBarNav = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <CustomHeader onPress={navigation.goBack} /> */}
      <Tab.Navigator
        screenOptions={{
          //   swipeEnabled: false,

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'none',
          },

          tabBarItemStyle: {
            width: Display.setWidth(100) / 4,
          },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: { backgroundColor: 'black' },
        }}>
        <Tab.Screen
          name="Booking"
          component={Booking}
          options={{
            tabBarLabel: 'hello',
            gestureDirection: 'horizontal-inverted',
          }}
        />
        <Tab.Screen
          name="Queue"
          component={Queue}
          options={{
            tabBarLabel: 'Queue',
            gestureDirection: 'horizontal-inverted',
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'History',
            gestureDirection: 'horizontal-inverted',
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: 'Calendar',
            gestureDirection: 'horizontal-inverted',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TopBarNav;

const styles = StyleSheet.create({});
