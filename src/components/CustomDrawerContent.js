import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
        const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.drawerHeader}>
        <Ionicons name="person-circle" size={80} color="white" />
        <Text style={styles.userName}>Bharatveer Singh</Text>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItem
          icon={({ color, size }) => <Ionicons name="home" size={size} color={color} />}
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          icon={({ color, size }) => <Ionicons name="person" size={size} color={color} />}
          label="Profile"
          onPress={() => props.navigation.navigate('Profile')}
        />
        <DrawerItem
          icon={({ color, size }) => <Ionicons name="settings" size={size} color={color} />}
          label="Settings"
          onPress={() => props.navigation.navigate('Settings')}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Ionicons name="log-out" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: '#5E35B1',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 18,
    marginTop: 8,
  },
  drawerItems: {
    flex: 1,
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#d9534f',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default CustomDrawerContent;
