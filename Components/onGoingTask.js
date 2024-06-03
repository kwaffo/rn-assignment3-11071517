import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingTasks = () => {
  const tasks = [
    { name: 'Mobile App Development' },
    { name: 'Web Development' },
    { name: 'Push Ups' },
    { name: 'Chop' },
    { name: 'and Chop again' },
    { name: 'Sleep' },
    { name: 'Skip' },
    { name: 'Code' },
    { name: 'stroll' },
    { name: ' relax' },
    { name: 'data structures and algorithm' },
    { name: 'think of new ideas' },
    { name: 'Do not let anyone disrespect you' },
    { name: 'Code' },
    { name: 'Do it again' },
  ];

  return (
    <View style={styles.ongoingTasks}>
      <Text style={styles.title}>Ongoing Tasks</Text>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskCard}>
            <Text>{task.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ongoingTasks: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskList: {
    flexDirection: 'column',
  },
  taskCard: {
    padding: 50,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default OngoingTasks;