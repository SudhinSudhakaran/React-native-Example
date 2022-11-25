import { StyleSheet, Text, View, FlatList, I18nManager,SafeAreaView } from 'react-native';
import React, { useRef } from 'react';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import FlatListItem from '../components/FlatListItem';
import CustomButton from '../components/CustomButton';
import RNRestart from 'react-native-restart';


const RtlFlatList = () => {
  const navigation = useNavigation();
  const element = useRef();
  const DATA = [
    {
      id: '1',
      title: 'A',
    },
    {
      id: '2',
      title: 'B',
    },
    {
      id: '3',
      title: 'C',
    },
    {
      id: '4',
      title: 'D',
    },
    {
      id: '5',
      title: 'E',
    },
    {
      id: '6',
      title: 'F',
    },
    {
      id: '7',
      title: 'G',
    },
    {
      id: '8',
      title: 'H',
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          // shadow
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,

          elevation: 11,
          marginTop: 20,
          width: 100,
          height: 80,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Text>{item?.title}</Text>
        <Text>{index}</Text>
      </View>
    );
  };
  const changeRtl = () => {
    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    } else {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  };
  return (
    <SafeAreaView>
      <CustomHeader screenHeader={'RTL FLATLIST'} onPress={navigation.goBack} />
      <FlatList
        nestedScrollEnabled
        data={I18nManager.isRTL ? DATA.reverse() : DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToEnd
        ref={element}
        inverted={I18nManager.isRTL ? true : false}
        legacyImplementation={true}
        initialScrollIndex={I18nManager.isRTL ? DATA.length - 1 : 0}
      />
      <CustomButton
        title={I18nManager.isRTL ? 'LTR' : 'RTL'}
        onPress={changeRtl}
      />
    </SafeAreaView>
  );
};

export default RtlFlatList;

const styles = StyleSheet.create({});
