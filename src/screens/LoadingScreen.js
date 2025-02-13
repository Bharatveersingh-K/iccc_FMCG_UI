import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Truck icon
import { LinearGradient } from 'expo-linear-gradient'; // Background gradient
import Logo from '../components/Logo';

const PRIMARY_COLOR = "#5E35B1"; // Theme primary color (Deep Purple)
const SECONDARY_COLOR = "#FF8F00"; // Theme secondary color (Orange)

const LoadingScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity
  const moveAnim = useRef(new Animated.Value(-250)).current; // Truck moves from left
  const scaleAnim = useRef(new Animated.Value(1)).current; // Pulsating effect

  useEffect(() => {
    // Fade-in Effect
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Truck Moving Animation with Bounce
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 180, // Moves to the right
          duration: 2500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -180, // Moves back for bounce effect
          duration: 2500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Pulsating Effect for Truck
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate to Login after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, moveAnim, scaleAnim]);

  return (
    <LinearGradient colors={[PRIMARY_COLOR, SECONDARY_COLOR]} style={styles.container}>
      {/* Truck Animation */}
      <Animated.View style={[styles.truckContainer, { transform: [{ translateX: moveAnim }, { scale: scaleAnim }] }]}>
        <MaterialCommunityIcons name="truck-fast" size={90} color="white" />
      </Animated.View>

      {/* Logo with Fade-in Effect */}
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Logo />
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  truckContainer: { position: 'absolute', bottom: 150 }, // Truck animation position
  logoContainer: { marginTop: 30, alignItems: 'center' }, // Centered logo
});

export default LoadingScreen;
