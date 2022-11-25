import { StyleSheet, Text, View, SafeAreaView, Linking } from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const DeepLinking = () => {
  const navigation = useNavigation();
  const Url_A = 'AwesomeProject://app/a';
  const Url_B = 'AwesomeProject://app/b/come-from-url';
  const Url_C = 'AwesomeProject://app/c';
  return (
    <SafeAreaView>
      <CustomHeader onPress={navigation.goBack} screenHeader={'Deep Linking'} />
      <CustomButton
        onPress={() => Linking.openURL(Url_A)}
        title={'Appointment details'}
      />
      <CustomButton
        onPress={() => Linking.openURL(Url_B)}
        title={'Previous Appointment details'}
      />

      <View
        style={{
          backgroundColor: 'red',
          width: responsiveWidth(50),
          height: responsiveHeight(40),
          alignSelf: 'center',
          marginTop: responsiveHeight(10),
        }}>
          <Text style={{fontSize: responsiveFontSize(5)}}>Hai</Text>
        </View>
    </SafeAreaView>
  );
};

export default DeepLinking;

const styles = StyleSheet.create({});
