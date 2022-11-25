/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Permission from './Permission';
import CustomComponent from './CustomComponent';
import { checkPermission } from '../helper/Permissions';
import { PERMISSIONS, check, request } from 'react-native-permissions';
import ImagePicker from 'react-native-image-crop-picker';
import { ScrollView } from 'react-native-gesture-handler';
const Home1 = () => {
  const navigation = useNavigation();

  const cameraButtonAction = async () => {
    const permission =
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.CAMERA]
        : [PERMISSIONS.ANDROID.CAMERA];

    // Call our permission service and check for permissions
    const isPermissionGranted = await checkPermission(permission);
    console.log('isPermissionGranted', isPermissionGranted);

    if (isPermissionGranted === true) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    } else {
    }
  };
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{ borderWidth: 1, backgroundColor: getRandomColor() }}>
          <Text>Goto Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Form')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Permission')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Permission</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('CustomComponent')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto CustomComponent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => cameraButtonAction()}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabFlatList')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>TabFlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewAnimationHeight')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Animation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LinkingPage')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Linking</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DeepLinking')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Deep Linking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RtlScreen')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto Deep rtl</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FlatListImage')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto FlatlistImage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TopBarNav')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto tab bar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PopUp')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto PopUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModalPopUp')}
          style={[styles.button, { backgroundColor: getRandomColor() }]}>
          <Text>Goto ModalPopUp</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home1;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
