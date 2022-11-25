import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   Alert.alert('You are entered in Home screen');
  //   return () => {
  //     // Alert.alert('You are navigating from home');
  //   };
  // }, [count]);
  useFocusEffect(
    React.useCallback(() => {
      alert('enter home');
      return () => {
         Alert.alert('You are navigating from home');
      };
    }, []),
  );

  // useLayoutEffect(() => {
  //   alert('use layout hook called');
  //   return () => {};
  // }, []);
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Count : {count}</Text>
        <TouchableOpacity onPress={() => setCount(prevCount => prevCount + 1)}>
          <Text>Change count</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home2')}
          style={{ borderWidth: 1, marginTop: 50 }}>
          <Text>Goto Home 2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
