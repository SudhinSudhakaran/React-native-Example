import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CustomButton = props => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
CustomButton.defaultProps = {
  title: 'button',
  onPress: () => console.log('onpress'),
};
export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
});
