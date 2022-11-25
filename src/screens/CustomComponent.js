import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import CustomView from '../components/CustomView';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomComponent = () => {
  const navigation = useNavigation();
  const inputOneRef = useRef();
  const inputTwoRef = useRef();
  const inputSixRef = useRef();
  const inputFourRef = useRef();
  const inputFiveRef = useRef();
  const inputThreeRef = useRef();
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputSix, setInputSix] = useState('');
  const [inputFour, setInputFour] = useState('');
  const [inputFive, setInputFive] = useState('');
  const [inputThree, setInputThree] = useState('');

  return (
    <SafeAreaView style={{flex:1}}>
      <CustomView>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
          <Text>CustomComponent</Text>
          <View style={{ marginTop: 120 }}>
            <Input
              ref={inputOneRef}
              onSubmitEdit={() => inputTwoRef.current.focus()}
              onChangeText={setInputOne}
            />
            <Input
              ref={inputTwoRef}
              onChangeText={setInputTwo}
              onSubmitEdit={() => inputThreeRef.current.focus()}
            />
            <Input
              ref={inputThreeRef}
              onChangeText={setInputThree}
              onSubmitEdit={() => inputFourRef.current.focus()}
            />
            <Input
              ref={inputFourRef}
              onChangeText={setInputFour}
              onSubmitEdit={() => inputFiveRef.current.focus()}
            />
            <Input
              ref={inputFiveRef}
              onChangeText={setInputFive}
              onSubmitEdit={() => inputSixRef.current.focus()}
            />
            <Input
              ref={inputSixRef}
              onChangeText={setInputSix}
              onSubmitEdit={() => alert('done')}
            />
          </View>
        </View>
      </CustomView>
    </SafeAreaView>
  );
};

export default CustomComponent;

const styles = StyleSheet.create({});
