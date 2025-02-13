import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BottomNavigator from '../navigation/BottomNavigator';
import TopBar from '../navigation/TopBar';

const stores = [
  { id: '1', name: 'Reliance Fresh', address: 'MG Road, Mumbai' },
  { id: '2', name: 'Big Bazaar', address: 'Connaught Place, Delhi' },
  { id: '3', name: 'D-Mart', address: 'Baner, Pune' },
  { id: '4', name: 'More Supermarket', address: 'Koramangala, Bangalore' },
  { id: '5', name: 'Spencer’s', address: 'Salt Lake, Kolkata' },
  { id: '6', name: 'Metro Cash & Carry', address: 'Mehdipatnam, Hyderabad' },
  { id: '7', name: 'Easyday Club', address: 'Sector 22, Chandigarh' },
  { id: '8', name: 'Vishal Mega Mart', address: 'Sector 18, Noida' },
  { id: '9', name: 'Star Bazaar', address: 'Vashi, Navi Mumbai' },
  { id: '10', name: 'Nature’s Basket', address: 'Defence Colony, Delhi' },
];

export default function TodayTaskScreen() {
  const navigation = useNavigation();

  const handleOpenTask = (store) => {
    navigation.navigate('TaskDetails', { store });
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.header}>Today's FMCG Stores</Text>

      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.storeName}>{item.name}</Text>
            <Text style={styles.storeAddress}>{item.address}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleOpenTask(item)}>
              <Text style={styles.buttonText}>Open Task</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <BottomNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
  },
  storeName: { fontSize: 16, fontWeight: 'bold' },
  storeAddress: { fontSize: 14, color: 'gray', marginBottom: 10 },
  button: { backgroundColor: '#5e35b1', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
