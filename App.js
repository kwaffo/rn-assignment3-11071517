import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import OngoingTasks from './Components/onGoingTask';

import Header from './Components/Header';
import SearchBar from './Components/searchBar';
import Categories from './Components/categories';


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <OngoingTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
});