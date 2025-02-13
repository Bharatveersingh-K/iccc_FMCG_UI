import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import TopBar from '../navigation/TopBar';

const tasks = [
  { id: '1', question: 'Check stock levels' },
  { id: '2', question: 'Verify shelf arrangement' },
  { id: '3', question: 'Ensure promotional banners are displayed' },
  { id: '4', question: 'Check expiry dates of products' },
  { id: '5', question: 'Count number of customers visiting store' },
];

export default function TaskDetailsScreen() {
  const route = useRoute();
  const { store } = route.params;

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.header}>Tasks for {store.name}</Text>
      <Text style={styles.subHeader}>{store.address}</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>{item.question}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  subHeader: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 10 },
  taskCard: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  taskText: { fontSize: 16 },
});
