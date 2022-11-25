/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import CustomView from '../components/CustomView';

const Form = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('dd');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameOne, setNameOne] = useState('');
  const [nameTwo, setNameTwo] = useState('');
  const [nameThree, setNameThree] = useState('');
  const [nameFour, setNameFour] = useState('');
  const [nameFive, setNameFive] = useState('');
  const [nameSix, setNameSix] = useState('');
  const firstNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const nameOneRef = useRef();
  const nameTwoRef = useRef();
  const nameThreeRef = useRef();
  const nameFourRef = useRef();
  const nameFiveRef = useRef();
  const nameSixRef = useRef();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true });
    return () => {};
  }, []);

  return (
    <CustomView>
      <ScrollView keyboardShouldPersistTaps="always">
        <Text>Form</Text>

        <View style={{ marginTop: 50 }}>
          <Text style={styles.title}>First name </Text>
          <Text style={styles.title}>{firstName}</Text>
          <Input
            ref={firstNameRef}
            style={{ borderColor: 'green', borderWidth: 2 }}
            onSubmitEdit={() => emailRef.current.focus()}
            onChangeText={setFirstName}
            autoFocus={true}
          />
          <Text style={styles.title}>Email</Text>
          <Input
            ref={emailRef}
            onSubmitEdit={() => phoneRef.current.focus()}
            onChangeText={setEmail}
          />
          <Text style={styles.title}>Phone</Text>
          <Input
            ref={phoneRef}
            onSubmitEdit={() => nameOneRef.current.focus()}
            onChangeText={setPhone}
          />

          <Text style={styles.title}>Name 1</Text>
          <Input
            ref={nameOneRef}
            onSubmitEdit={() => nameTwoRef.current.focus()}
            onChangeText={setNameOne}
          />
          <Text style={styles.title}>Name 2</Text>
          <Input
            ref={nameTwoRef}
            onSubmitEdit={() => nameThreeRef.current.focus()}
            onChangeText={setNameTwo}
          />
          <Text style={styles.title}>Name 3</Text>
          <Input
            ref={nameThreeRef}
            onSubmitEdit={() => nameFourRef.current.focus()}
            onChangeText={setNameThree}
          />
          <Text style={styles.title}>Name 4</Text>
          <Input
            ref={nameFourRef}
            // onSubmitEdit={() => nameFiveRef.current.focus()}
            onChangeText={setNameFour}
          />
        </View>
      </ScrollView>
    </CustomView>
  );
};

export default Form;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 14,
  },
});
