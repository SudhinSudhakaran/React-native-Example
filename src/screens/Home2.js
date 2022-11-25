/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Home2 = () => {
  const navigation = useNavigation();
  const nameRef = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('red', nameRef);
    return () => {};
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ borderWidth: 1 }}>
        <Text>Back</Text>
      </TouchableOpacity>

      <Text ref={nameRef}>Sudhin</Text>
    </SafeAreaView>
  );
};

export default Home2;

const styles = StyleSheet.create({});
