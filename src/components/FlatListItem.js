/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Images from '../constants/Images';
import Display from '../helper/Display';
const FlatListItem = ({ item }) => {
  const animation = useSharedValue({ width: 200, height: 80 });
  const imageAnimation = useSharedValue({ width: 100, height: 0, opacity: 0 });
  const titleAnimation = useSharedValue({
    marginLeft: Display.setWidth(30),
    fontSize: 30,
    color: 'red',
  });
  const [selectedItem, setSelectedItem] = useState(null);

  const animationStyle = useAnimatedStyle(() => {
    return {
      // width: withTiming(animation.value.width, {
      //   duration: 1000,
      // }),
      height: withTiming(animation.value.height, {
        duration: 1000,
      }),
    };
  });
  const imageAnimationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(imageAnimation.value.height, {
        duration: 1000,
      }),
      opacity: withTiming(imageAnimation.value.opacity, {
        duration: 1200,
      }),
    };
  });

  const titleAnimationStyle = useAnimatedStyle(() => {
    return {
      marginLeft: withTiming(titleAnimation.value.marginLeft, {
        duration: 1000,
      }),
      fontSize: withTiming(titleAnimation.value.fontSize, {
        duration: 1000,
      }),
      color: withTiming(titleAnimation.value.color, {
        duration: 1000,
      }),
    };
  });
  const selectItemAction = _item => {
    if (selectedItem === _item) {
      animation.value = { height: 80 };
      imageAnimation.value = { height: 0, opacity: 0 };
      titleAnimation.value = {
        marginLeft: Display.setWidth(30),
        fontSize: 30,
        color: 'red',
      };
      setSelectedItem(null);
    } else {
      animation.value = { height: 200 };
      imageAnimation.value = { height: 100, opacity: 1 };
      titleAnimation.value = {
        marginLeft: 15,
        fontSize: 15,
        color: 'green',
      };
      setSelectedItem(_item);
    }
  };
  const ImageComponent = () => {
    return (
      <Animated.Image
        style={[styles.image, imageAnimationStyle]}
        source={{
          uri: item.image,
        }}
      />
    );
  };
  return (
    <Animated.View style={[styles.box, animationStyle]}>
      <Animated.Text
        style={[
          {
            color: 'red',
            fontStyle: 'italic',
            fontWeight: 'bold',
            marginTop: 15,
          },
          titleAnimationStyle,
        ]}>
        {item.title}
      </Animated.Text>

      <ImageComponent />

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => {
          selectItemAction(item?._id);
        }}>
        <Image
          source={Images.DROP_DOWN_ARROW}
          style={{
            tintColor: 'black',
            width: 10,
            height: 10,
            transform: [{ rotate: selectedItem !== null ? '180deg' : '0deg' }],
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  box: {
    width: Display.setWidth(90),
    minHeight: 80,
    backgroundColor: '#fff',
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginTop: 20,
  },
  arrowButton: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  image: { width: 100, height: 0, alignSelf: 'center', resizeMode: 'contain' },
});
