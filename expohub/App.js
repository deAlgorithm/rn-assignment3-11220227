import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Greet from './screens/greetSection';
import Search from './screens/searchSection';
import Tasks from './screens/taskSection';
import Cartegory from './screens/cartegory';


export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Greet/>
        <Search/>
        <Text style={styles.cartTitle}>Cartegories</Text>
        <Cartegory/>
        <Tasks/>
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    padding: 10,
    
  },
  cartTitle:{
    fontSize: 35,
  }
});
