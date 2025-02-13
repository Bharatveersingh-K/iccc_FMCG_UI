import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Logo from '../components/Logo';
import BottomNavigator from '../navigation/BottomNavigator';
import TopBar from '../navigation/TopBar';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Menu and Notifications */}
      <TopBar />

      {/* Centered Logo */}
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      {/* Dashboard Boxes */}
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TodayTask')}>
          <FontAwesome5 name="tasks" size={30} color="white" />
          <Text style={styles.boxText}>Today's Task</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('UpcomingTask')}>
          <MaterialIcons name="update" size={30} color="white" />
          <Text style={styles.boxText}>Upcoming Task</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TaskHistory')}>
          <Ionicons name="time" size={30} color="white" />
          <Text style={styles.boxText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings" size={30} color="white" />
          <Text style={styles.boxText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15, 
    backgroundColor: '#5E35B1' 
  },
  logoContainer: { 
    alignItems: 'center', 
    marginVertical: 100, 
  },
  boxContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,  
  },
  box: { 
    width: '45%',  
    height: 120,  
    backgroundColor: '#5E35B1', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,  
    borderRadius: 15, 
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowOffset: { width: 0, height: 2 }, 
    elevation: 5 
  },
  boxText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 10 
  },
 
});

export default HomeScreen;
