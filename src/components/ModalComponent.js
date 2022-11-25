import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Display from '../helper/Display';

const ModalComponent = ({ toggleModal }) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: Display.setHeight(50),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
   

      <Button title="Hide modal" onPress={toggleModal} />
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
