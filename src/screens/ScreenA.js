import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';

const ScreenA = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <CustomHeader onPress={navigation.goBack} />
      <Text>Screen A</Text>
    </SafeAreaView>
  );
};

export default ScreenA;

const styles = StyleSheet.create({});
