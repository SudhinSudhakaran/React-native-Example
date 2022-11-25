import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import CustomView from '../components/CustomView';
import CustomHeader from '../components/CustomHeader';
import Modal from 'react-native-modal';
import Display from '../helper/Display';
import ModalComponent from '../components/ModalComponent';
const ModalPopUp = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <CustomView>
      <CustomHeader />
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        style={{
          margin: 0,
        }}>
        <ModalComponent toggleModal={toggleModal} />
      </Modal>
    </CustomView>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({});
