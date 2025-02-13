import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={[styles.logoText, { color: '#FFFFFF' }]}>ICCC</Text>
        <Text style={[styles.logoText, { color: '#FF8F00' }]}> FMCG</Text>
      </View>
      <Text style={styles.tagline}>Supply Chain Management</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30, // More spacing before inputs
  },
  logoBox: {
    backgroundColor: '#5E35B1', // Dark purple background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12, // Rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Shadow for Android
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF8F00', // Orange border
  },
  logoText: {
    fontSize: 24, // Larger font
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tagline: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#5E35B1', // Matches theme
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Logo;
