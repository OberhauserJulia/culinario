import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

interface SmallButtonProps {
  filter?: boolean;
  dots?: boolean;
  back?: boolean;
  plus?: boolean;
  shoppingCart?: boolean;
}

export default function SmallButton({ filter, dots, back, plus, shoppingCart }: SmallButtonProps) {
  return (
    <View style={[styles.button, filter && styles.filterButton]}>
        {filter && <Image style={styles.image} source={require('../assets/icons/filter.png')} />}
        {dots && <Image style={styles.image} source={require('../assets/icons/vertical-dots.png')} />}
        {back && <Image style={styles.image} source={require('../assets/icons/back.png')} />}
        {plus && <Image style={styles.image} source={require('../assets/icons/plus.png')} />}
        {shoppingCart && <Image style={styles.image} source={require('../assets/icons/shoppingCart.png')} />}
    </View>
  );
}
 
const styles = StyleSheet.create({

  button: {
    backgroundColor: '#22222280',
    height: 49,
    width: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 12,
  },

  filterButton: {
    backgroundColor: '#66A182',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});