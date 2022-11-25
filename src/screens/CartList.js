import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import RNRestart from 'react-native-restart';

const CartList = () => {
  const navigation = useNavigation();

  const languageRestart = async () => {
    if (I18nManager.isRTL) {
      await I18nManager.forceRTL(false);
    } else {
      if (!I18nManager.isRTL) {
        await I18nManager.forceRTL(true);
      }
       RNRestart.Restart();
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('AddressList')}>
        <Text>Choose address</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => languageRestart()}>
        <Text>RTL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartList;
