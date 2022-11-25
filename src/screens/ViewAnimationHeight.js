/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {} from 'react-native-gesture-handler';
import Display from '../helper/Display';
import FlatListItem from '../components/FlatListItem';

import { useNavigation } from '@react-navigation/native';
import Images from '../constants/Images';
import CustomHeader from '../components/CustomHeader';
const ViewAnimationHeight = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      _id: '102aka019ka9001',
      title: 'Apple',
      image:
        'https://media.istockphoto.com/photos/red-apple-picture-id495878092?b=1&k=20&m=495878092&s=170667a&w=0&h=bJgILGFxOka0ymPlgilH8qaRxFhKole_M6IiYs6RyGM=',
    },
    {
      _id: '102aka019ka9002',
      title: 'Orange',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbb0dC-vAS3Mqx6l_F6uDkUSWFtjHJ8v-MA&usqp=CAU',
    },
    {
      _id: '102aka019ka9003',
      title: 'Grape',
      image:
        'https://img.freepik.com/premium-vector/isolated-dark-grape-with-green-leaf_317810-1956.jpg?w=2000',
    },
    {
      _id: '102aka019ka9004',
      title: 'Mango',
      image:
        'https://www.devgadmango.com/wp-content/uploads/2019/11/orignal-mango.png',
    },
    {
      _id: '102aka019ka9005',
      title: 'Blueberries',
      image:
        'https://media.istockphoto.com/photos/blueberry-isolated-on-white-background-picture-id853493518?k=20&m=853493518&s=612x612&w=0&h=LzYEckuNGx8R_L-DIJSMn2NRt5XmZnC9lQ7pk5NzYYk=',
    },

    {
      _id: '102aka019ka9007',
      title: 'Avocado',
      image: 'https://m.media-amazon.com/images/I/71LUriXVE2L._SL1500_.jpg',
    },
    {
      _id: '102aka019ka9008',
      title: 'Lychee',
      image:
        'https://cdn.shopify.com/s/files/1/2028/2057/articles/Evidence-Based_0c2e7cf7-9a14-438f-a65b-ab7cce47c279_1024x400.jpg?v=1642487732',
    },
  ];

  const renderItem = ({ item }) => <FlatListItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader onPress={navigation.goBack} screenHeader={'Fruits List'} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ marginTop: 50 }}
        contentContainerStyle={{
          width: Display.setWidth(100),

          alignItems: 'center',
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ViewAnimationHeight;
