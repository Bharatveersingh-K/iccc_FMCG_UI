import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Logo from '../components/Logo';
import googleIcon from '../../assets/google.png';
import facebookIcon from '../../assets/facebook.png';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo Component */}
      <Logo />

      {/* Title */}
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#5E35B1" style={styles.icon} />
        <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#888" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#5E35B1" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} placeholderTextColor="#888" />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Social Login Buttons */}
      <Text style={styles.orText}>Or Login With</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={googleIcon} style={styles.socialIcon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={facebookIcon} style={styles.socialIcon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don't have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#5E35B1', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#777', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', width: '90%', backgroundColor: '#F5F5F5', borderRadius: 10, padding: 10, marginBottom: 15 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: '#333' },
  button: { backgroundColor: '#5E35B1', paddingVertical: 12, width: '90%', borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  orText: { marginVertical: 15, fontSize: 16, color: '#777' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
  socialButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, width: '45%', justifyContent: 'center' },
  socialIcon: { width: 24, height: 24, marginRight: 8 },
  socialText: { fontSize: 16, color: '#333', fontWeight: 'bold' },
  signupText: { marginTop: 15, fontSize: 16, color: '#777' },
  signupLink: { color: '#5E35B1', fontWeight: 'bold' },
});

export default LoginScreen;
