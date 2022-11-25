import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

const ScreenB = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: { message },
  } = route;
  return (
    <SafeAreaView>
      <CustomHeader onPress={navigation.goBack} />
      <Text>Screen B</Text>
      <Text>{message}</Text>
    </SafeAreaView>
  );
};

export default ScreenB;

const styles = StyleSheet.create({});
