import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';

import Display from '../helper/Display';
import Images from '../constants/Images';

const CustomHeader = ({ onPress, screenHeader }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress?.();
        }}>
        <Image source={Images.BACK_ARROW} style={styles.buttonImage} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{screenHeader}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: Display.setWidth(100),
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600',
    marginLeft: 20,
  },
  button: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 2,
    zIndex: 5,
  },
});
