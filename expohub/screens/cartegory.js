import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Category = () => {
  const categories = [
    { title: 'Exercise', numOfTasks: 5, image: require('../assets/assignment.png') },
    { title: 'Study', numOfTasks: 3, image: require('../assets/study.png') },
    { title: 'Code', numOfTasks: 4, image: require('../assets/code.png') },
    { title: 'Cook', numOfTasks: 2, image: require('../assets/cook.png') },
    { title: 'Gardening', numOfTasks: 3, image: require('../assets/gardening.png') },
    { title: 'Shopping', numOfTasks: 6, image: require('../assets/shopping.png') },
    { title: 'Cleaning', numOfTasks: 4, image: require('../assets/cleaning.png') },
    { title: 'Relaxation', numOfTasks: 2, image: require('../assets/relaxation.png') },
    
  ];

  return (
    <View style={styles.container}>
      <ScrollView  horizontal={true}>
        {categories.map((category, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.title}>{category.title}</Text>
            <Text>{`${category.numOfTasks} Tasks`}</Text>
            <Image source={category.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 15,
    shadowColor: '#fefefe',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Category;
