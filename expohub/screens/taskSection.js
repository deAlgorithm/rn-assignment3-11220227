
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const Tasks = () => {

  const ongoingTasks = [
    { id: '1', title: 'Task 1 - Exercise' },
    { id: '2', title: 'Task 2 - Study' },
    { id: '3', title: 'Task 3 - Code' },
    { id: '4', title: 'Task 4 - Cook' },
    { id: '5', title: 'Task 5 - Gardening' },
    { id: '6', title: 'Task 6 - Shopping' },
    { id: '7', title: 'Task 7 - Cleaning' },
    { id: '8', title: 'Task 8 - Relaxation' },
    { id: '9', title: 'Task 9 - Writing' },
    { id: '10', title: 'Task 10 - Meditation' },
    { id: '11', title: 'Task 11 - Drawing' },
    { id: '12', title: 'Task 12 - Cooking' },
    { id: '13', title: 'Task 13 - Exercising' },
    { id: '14', title: 'Task 14 - Reading' },
    { id: '15', title: 'Task 15 - Planning' },

  ];


  const renderTaskItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ongoingTasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 40,
    marginBottom: 30,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#fefefe',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title:{
    fontSize: 20,
    fontFamily: 'sans-serif-condensed',
  }
});

export default Tasks;
