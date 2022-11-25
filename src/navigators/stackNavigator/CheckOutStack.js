import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  ImageStore,
  Image,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StepIndicator from '../../screens/StepIndicator';
import Home from '../../screens/Home';
import CartList from '../../screens/CartList';
import AddressLiist from '../../screens/AddressLiist';
import OrderSummary from '../../screens/OrderSummary';
const { width, height } = Dimensions.get('window');
import Images from '../../constants/Images';
import { createNavigationContainerRef } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

import { useNavigationState } from '@react-navigation/native';

// eslint-disable-next-line react-hooks/rules-of-hooks

const CheckOutStack = ({ navigation }) => {
  const screenName = useNavigationState(
    state => state.routes[state.index].name,
  );
  console.log('=====', screenName);
  const CheckOutStackHeader = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'transparent',
          height: 100,
          width: width - 15,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CartList');
          }}
          style={{}}>
          <StepIndicator _text={'cart'} currentIndex={0} currentPage={1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddressList');
          }}
          style={{}}>
          <StepIndicator _text={'cart'} currentIndex={1} currentPage={2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{}}>
          <StepIndicator _text={'cart'} currentIndex={2} currentPage={2} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Stack.Navigator
      ref={navigationRef}
      screenOptions={{
        headerShown: true,
        animation: 'none',
      }}
      initialRouteName={{ CartList }}
      options={{ gestureEnabled: false }}>
      <Stack.Screen
        name="CartList"
        component={CartList}
        options={{
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerLeft: null,
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          gestureEnabled: false,
          headerStyleInterpolator: true,
          headerTitle: props => <CheckOutStackHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="AddressList"
        component={AddressLiist}
        options={{
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerLeft: null,
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          gestureEnabled: false,
          headerStyleInterpolator: true,
          headerTitleStyle: {
            borderColor: 'red',
            backgroundColor: 'red',
          },
          headerTitle: props => <CheckOutStackHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="OrderSummary"
        component={OrderSummary}
        options={{
          headerBackTitleVisible: false,
          headerBackVisible: false,
          headerLeft: null,
          cardShadowEnabled: false,
          cardOverlayEnabled: false,
          gestureEnabled: false,
          headerStyleInterpolator: true,
          headerStyle: {},
          headerTitle: props => <CheckOutStackHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default CheckOutStack;
