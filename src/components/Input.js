import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const Input = React.forwardRef((props, ref) => {
  const {
    placeHolder,
    errorText,
    style,
    onSubmitEdit,
    onChangeText,
    autoFocus,
  } = props;
  console.log('ref=>', ref);
  const _setState = value => {
    onChangeText(value);
  };
  useEffect(() => {}, []);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.inputField, style]}
          placeholder={placeHolder}
          ref={ref}
          onChangeText={value => _setState(value)}
          onSubmitEditing={() => setTimeout(() => onSubmitEdit(), 200)}
          autoFocus={autoFocus}
        />
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </View>

      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 0.5,
    marginHorizontal: 15,
    height: 45,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'right',
    fontSize: 12,
    marginRight: 15,
    marginBottom: 20,
    marginTop: 8,
  },
});
