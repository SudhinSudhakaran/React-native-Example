import React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigationState,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  TransitionPresets,
} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import TabNavigator from '../tabNavigator/TabNavigator';
import Home1 from '../../screens/Home1';
import Home2 from '../../screens/Home2';
import Form from '../../screens/Form';
import Permission from '../../screens/Permission';
import CustomComponent from '../../screens/CustomComponent';
import ViewAnimationHeight from '../../screens/ViewAnimationHeight';
import LinkingPage from '../../screens/LinkingPage';
import DeepLinking from '../../screens/DeepLinking';
import ScreenA from '../../screens/ScreenA';

import ScreenB from '../../screens/ScreenB';
import RtlFlatList from '../../screens/RtlFlatList';
import FlatListImage from '../../screens/FlatListImage';
import TopBarNav from '../../screens/TopBarNav';
import PopUp from '../../screens/PopUp';
import TabFlatList from '../../screens/TabFlatList';
import ModalPopUp from '../../screens/ModalPopUp';
export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();
const route = navigationRef.getCurrentRoute();
const config = {
  screens: {
    ScreenA: 'a',
    ScreenB: {
      path: 'b/:message',
      parse: {
        message: message => `${'kjvgidfg398393bldfhi857hhy'}`,
      },
    },
    ScreenC: 'c',
  },
};
const RootStack = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      // onStateChange={state => console.log('New state is', state)}
      linking={{
        prefixes: ['AwesomeProject://app'],
        config,
      }}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={{ Home1 }}
        options={{ gestureEnabled: false }}>
        {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Permission" component={Permission} />
        <Stack.Screen name="CustomComponent" component={CustomComponent} />
        <Stack.Screen
          name="ViewAnimationHeight"
          component={ViewAnimationHeight}
        />
        <Stack.Screen name="LinkingPage" component={LinkingPage} />
        <Stack.Screen name="DeepLinking" component={DeepLinking} />
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
        <Stack.Screen name="RtlScreen" component={RtlFlatList} />
        <Stack.Screen name="FlatListImage" component={FlatListImage} />
        <Stack.Screen name="TopBarNav" component={TopBarNav} />
        <Stack.Screen
          name="PopUp"
          component={PopUp}
          options={{ presentation: 'card' }}
        />
        <Stack.Screen name="TabFlatList" component={TabFlatList} />
        <Stack.Screen name="ModalPopUp" component={ModalPopUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
