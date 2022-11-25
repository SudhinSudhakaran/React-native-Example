import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AddressLiist = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('OrderSummary')}>
        <Text>OrderSummary</Text>
      </TouchableOpacity>
    </View> 
  );
}

export default AddressLiist

const styles = StyleSheet.create({})