import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Tasks = () => {
  const [ongoingTasks, setOngoingTasks] = useState([
    { id: '1', title: 'Task 1 - Exercise', priority: 'high', category: 'personal', completed: false },
    { id: '2', title: 'Task 2 - Study', priority: 'medium', category: 'work', completed: false },
    { id: '3', title: 'Task 3 - Code', priority: 'high', category: 'work', completed: false },
    { id: '4', title: 'Task 4 - Cook', priority: 'low', category: 'personal', completed: false },
    { id: '5', title: 'Task 5 - Gardening', priority: 'medium', category: 'personal', completed: false },
    { id: '6', title: 'Task 6 - Shopping', priority: 'low', category: 'personal', completed: false },
    { id: '7', title: 'Task 7 - Cleaning', priority: 'medium', category: 'household', completed: false },
    { id: '8', title: 'Task 8 - Relaxation', priority: 'low', category: 'personal', completed: false },
    { id: '9', title: 'Task 9 - Writing', priority: 'high', category: 'work', completed: false },
    { id: '10', title: 'Task 10 - Meditation', priority: 'medium', category: 'personal', completed: false },
    { id: '11', title: 'Task 11 - Drawing', priority: 'low', category: 'personal', completed: false },
    { id: '12', title: 'Task 12 - Cooking', priority: 'medium', category: 'personal', completed: false },
    { id: '13', title: 'Task 13 - Exercising', priority: 'high', category: 'personal', completed: false },
    { id: '14', title: 'Task 14 - Reading', priority: 'medium', category: 'personal', completed: false },
    { id: '15', title: 'Task 15 - Planning', priority: 'high', category: 'work', completed: false },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const toggleTaskCompletion = (id) => {
    setOngoingTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderTaskItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: item.completed ? '#f0f0f0' : '#ffffff' },
      ]}
      onPress={() => setSelectedTask(item)}
    >
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.completed ? styles.checkboxCompleted : null,
          ]}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ongoingTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
      />
      {selectedTask && (
        <View style={styles.taskDetailsModal}>
          <View style={styles.taskDetailsContainer}>
            <Text style={styles.taskDetailsTitle}>{selectedTask.title}</Text>
            <Text style={styles.taskDetailsText}>
              Priority: {selectedTask.priority}
            </Text>
            <Text style={styles.taskDetailsText}>
              Category: {selectedTask.category}
            </Text>
            <Text style={styles.taskDetailsText}>
              Status: {selectedTask.completed ? 'Completed' : 'Incomplete'}
            </Text>
            <TouchableOpacity
              style={styles.taskDetailsCloseButton}
              onPress={() => setSelectedTask(null)}
            >
              <Text style={styles.taskDetailsCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    flex: 1,
  },
  checkboxContainer: {
    padding: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
  },
  checkboxCompleted: {
    backgroundColor: '#000',
  },
  taskDetailsModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  taskDetailsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  taskDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskDetailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskDetailsCloseButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  taskDetailsCloseButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tasks;
