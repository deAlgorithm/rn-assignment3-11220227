import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cartegories from './screens/cartegoriesSection';
import Greet from './screens/greetSection';
import Search from './screens/searchSection';
import Tasks from './screens/taskSection';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Greet/>
        <Search/>
        <Cartegories/>
        <Tasks/>
        
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fefefe',
  },
  container: {
    flex: 1,
    padding: 10,
    
  },
});
