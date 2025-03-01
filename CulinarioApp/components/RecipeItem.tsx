import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function RecipeItem() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/recipeImages/marry-me-gnocchi.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Karotten-Walnuss-Kuchen mit Karamell-Frischkäse-Glasur
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderRadius: 15,
    alignSelf: 'flex-start',
    width: '100%',
    maxHeight: 198,
    backgroundColor: '#222222',
    position: 'relative',
  },

  image: {
    width: '100%',
    maxHeight: 149,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  textContainer: {
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#222222',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    position: 'absolute',
    bottom: 0,
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'center',
  },

  rightContainer: {
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
    borderRadius: 15,
    paddingHorizontal: 10,
  },

  rightText: {
    color: '#FFF',
    fontSize: 16,
  },
});