import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
