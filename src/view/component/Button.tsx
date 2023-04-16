import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../consts/colors';

interface IPrimaryButton {
  title: string;
  onPress: () => void;
}

const PrimaryButton = ({title, onPress}: IPrimaryButton) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress}: IPrimaryButton) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...styles.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...styles.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};
