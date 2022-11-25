import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Images from '../constants/Images';

const IconComponent = props => {
  return props.currentPage > props.currentIndex ? (
    <Image
      source={Images.CHECKOUT_OPTION_COMPLETED}
      style={{ tintColor: 'red' }}
    />
  ) : props.currentIndex === props.currentPage ? (
    <Image
      source={Images.CHECKOUT_OPTION_SELECTED}
      style={{ tintColor: 'red' }}
    />
  ) : (
    <Image
      source={Images.CHECKOUT_OPTION_NOT_SELECTED}
      style={{ tintColor: 'red' }}
    />
  );
};

const StepIndicator = ({ _text, currentIndex, currentPage }) => {
  // console.log('currentIndex', currentIndex);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginTop: 8,
        width: 110,
      }}>
      <View
        style={{
          width: '100%',
          height: 7,
          borderRadius: 7,
          backgroundColor: currentPage >= currentIndex ? 'red' : 'gray',
          marginBottom: 10,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
       
        }}>
        <View
          style={{
            marginRight: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconComponent
            currentIndex={currentIndex}
            currentPage={currentPage}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: '#696969',
              marginTop: 2,
            }}>
            {`${_text}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StepIndicator;

const styles = StyleSheet.create({});
