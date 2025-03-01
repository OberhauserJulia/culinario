import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Imports Compponents
import SmallButton from '../components/SmallButton';
import InputField from '../components/InputField';
import CategoryItem from '../components/CategoryItem';
import RecipeItem from '../components/RecipeItem';

export default function HomeScreen() {
  const { addPlant } = useContext(PlantContext);
  const [plantName, setPlantName] = useState('');
  const [plantDescription, setPlantDescription] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.text}>Heyy :)</Text>
        <SmallButton dots={true} />
      </View>
    
      {/* Filter Bar */}
      <View style={styles.filterBar}>
        <InputField />
        <SmallButton filter={true} />
      </View>

      {/* Category Item */}
      <View style={styles.filterBar}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </View>

      {/* Recipe List */}
      <RecipeItem />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
    backgroundColor: '#161616',
    padding: 24,
    paddingTop: 68,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  filterBar: {
    flexDirection: 'row',
    gap: 24,
    width: '100%',
  },


  text: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: 'bold',
  },
});