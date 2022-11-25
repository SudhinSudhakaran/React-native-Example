import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Header from '../Params/Header';
import CustomHeader from '../components/CustomHeader';

const DATA = [
  {
    id: '1',
    name: 'Potato',
    image: [
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',

      'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600',

      'https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas=',
    ],
  },
  {
    id: '2',
    name: 'Tomato',
    image: [
      'https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000',

      'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg',

      'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000',
    ],
  },
  {
    id: '3',
    name: 'Onion',
    image: [
      'https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg',

      'https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=',

      'https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg',
    ],
  },
  //   {
  //     id: '4',
  //     name: 'Pumpkin',
  //     image: require('../Assets/Vegetables/Pumpkin.jpg'),
  //   },
  //   {
  //     id: '5',
  //     name: 'Cabbage',
  //     image: require('../Assets/Vegetables/cabbage.jpg'),
  //   },
  //   {
  //     id: '6',
  //     name: 'Carrot',
  //     image: require('../Assets/Vegetables/carrot.jpg'),
  //   },
  //   {
  //     id: '7',
  //     name: 'Beetroot',
  //     image: require('../Assets/Vegetables/Beetroot.jpg'),
  //   },
  //   {
  //     id: '8',
  //     name: 'Capcicum',
  //     image: require('../Assets/Vegetables/Capcicum.jpg'),
  //   },
  //   {
  //     id: '9',
  //     name: 'Bitter Ground',
  //     image: require('../Assets/Vegetables/Bitterground.jpg'),
  //   },
  //   {
  //     id: '10',
  //     name: 'Radish',
  //     image: require('../Assets/Vegetables/Radish.jpg'),
  //   },
  //   {
  //     id: '11',
  //     name: 'Cucumber',
  //     image: require('../Assets/Vegetables/Cucumber.jpg'),
  //   },
  //   {
  //     id: '12',
  //     name: 'Drum stick',
  //     image: require('../Assets/Vegetables/drumstick.jpg'),
  //   },
];

// const images = [
//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/Potato.jpg'),
//     },
//   },

//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/tomato.jpg'),
//     },
//   },
//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/onion.jpg'),
//     },
//   },
//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/Pumpkin.jpg'),
//     },
//   },
//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/cabbage.jpg'),
//     },
//   },
//   {
//     url: '',
//     props: {
//       source: require('../Assets/Vegetables/carrot.jpg'),
//     },
//   },
// ];

const FlatListImage = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  const [visible, setIsVisible] = useState(false);
  const [selectedImages, setSeletectedImages] = useState([]);

  const setId = (id, _image) => {
    console.log('Selectedid', selectedId, 'passedId', id);
    var obj = {};
    var img = [];
    if (_image.length > 0) {
      _image.map((item, index) => {
        obj.url = item;
        img.push(obj);
      });
      console.log('=======', img);
      setSeletectedImages(img);
    }

    if (selectedId === id) {
      console.log('id are same');

      setSelectedId(null);
    } else {
      setSelectedId(id);
      console.log('id are notsame');
    }
    console.log('id', id);
  };
  const renderItem = ({ item }) => <Item item={item} />;
  const Item = ({ item }) => {
    // const formatedImage= {`uri : ${item.image[0]}`}

    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.fontname}>{item.name}</Text>
          <TouchableOpacity
            style={[
              styles.downIcon,
              { backgroundColor: 'green', width: 10, height: 10 },
            ]}
            onPress={() => setId(item.id, item.image)}>
            {/* <Icon
              name={selectedId === item.id ? 'chevron-up' : 'chevron-down'}
              size={25}
              color="black"
            /> */}
          </TouchableOpacity>
        </View>
        {selectedId === item.id ? (
          <View>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <Image
                source={{ uri: item.image[0] }}
                style={styles.flatlistImage}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader onPress={navigation.goBack} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={Item => Item.id}
      />

      <Modal
        visible={visible}
        onRequestClose={() => setIsVisible(!visible)}
        animationType="fade">
        {/* <Header /> */}
        <TouchableOpacity
          onPress={() => setIsVisible(false)}
          style={{
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 20,
            top: 40,
            zIndex: 5,
          }}>
          <Text style={{ color: '#fff' }}>X</Text>
        </TouchableOpacity>
        <ImageViewer imageUrls={selectedImages} />
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d59be8',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fontname: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  flatlistImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  downIcon: {
    alignItems: 'flex-end',
  },
});

export default FlatListImage;
