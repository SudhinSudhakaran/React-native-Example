import { Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import { Permissions, RESULTS } from '../helper/Permissions';

const Permission = () => {
  const _openCamera = () => {
    var res = Permissions.cameraPermission();
    console.log('==>', res);
    if (res === 'blocked') {
      Linking.openSettings();
    } else {
      console.log('open camera');
    }
  };
  const _openFiles = () => {
    console.log('open files');
  };
  const _openlocation = () => {
    console.log('open location');
  };
  return (
    <View>
      <CustomButton title={'Open Camera'} onPress={_openCamera} />
      <CustomButton title={'Open Files'} onPress={_openFiles} />
      <CustomButton title={'Open Location'} onPress={_openlocation} />
    </View>
  );
};

export default Permission;

const styles = StyleSheet.create({});
