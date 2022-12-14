import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  findNodeHandle,
  TouchableOpacity,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Display from '../helper/Display';

const images = {
  man: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map(i => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
}));
const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text style={{ color: 'white' }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({ measures, scrollX }) => {
  const inputRange = data.map((_, i) => i * Display.setWidth(100));

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
    extrapolate: 'identity',
  });
  //   console.log('translateX =', translateX);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: 100,
        left: 0,
        backgroundColor: 'red',
        bottom: -10,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({ data, scrollX, onItemPress }) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    const m = [];
    data.forEach(item => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            // console.log('kkkk', m.length, data.length);
            setMeasures(m);
          }
        },
      );
    });
  });
  return (
    <View
      ref={containerRef}
      style={{ position: 'absolute', top: 100, width: Display.setWidth(100) }}>
      <View
        style={{
          justifyContent: 'space-evenly',
          flex: 1,
          flexDirection: 'row',
        }}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => {
                onItemPress(index);
              }}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};
export default function TabFlatList() {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onItemPress = React.useCallback(itemIndex => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * Display.setWidth(100),
    });
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: Display.setWidth(100),
            height: Display.setHeight(100),
            resizeMode: 'cover',
          }}
        />
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: 'rgba(0,0,0,0.3' },
          ]}></View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader onPress={navigation.goBack} />
      <Animated.FlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        inverted={I18nManager.isRTL ? true : false}
        // onScroll={Animated.event(
        //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        //   { useNativeDriver: false },
        //   console.log('flatlist', scrollX),
        // )}
        onScroll={() => {
          console.log('scrolled', ref?.getCurrentScrollPosition());
        }}
      />

      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
