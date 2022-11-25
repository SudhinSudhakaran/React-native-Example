/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Display from '../helper/Display';

const PopUp = () => {
  return (
    <View style={{ height: Display.setHeight(60), backgroundColor: 'red' }}>
      <Text>PopUp</Text>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({});
