import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CheckOutStack from '../stackNavigator/CheckOutStack';
import Images from '../../constants/Images';
const { width, height } = Dimensions.get('window');
import DetailsScreen from '../../screens/DetailsScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'red' }}>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
  const CheckOutStackHeader = () => {
    return (
      <View style={{ backgroundColor: 'green', width: width - 15 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={Images.CHECKOUT_OPTION_COMPLETED} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="cart"
        component={CheckOutStack}
        options={{
          headerShown:true,
          tabBarStyle: { display: 'none' },
          headerTitle: props => <CheckOutStackHeader {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
