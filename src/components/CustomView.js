import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Display from '../helper/Display';

const CustomView = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={80}
        style={styles.container}>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    width: Display.setWidth(100),
  },
});
