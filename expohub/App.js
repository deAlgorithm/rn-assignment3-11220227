import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
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
              <Text style={styles.Title}>Cartegories</Text>
              <Cartegory/>
              <Text style={styles.Title}>Ongoing Tasks</Text>
              <Tasks/>
              
              <StatusBar style="auto" />
          </View>
      </SafeAreaView>
    
     
 
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A45C10',
  },
  container: {
    flex: 1,
    padding: 10,
    
  },
  Title:{
    fontSize: 25,
    fontFamily: 'monospace',
  }
});
