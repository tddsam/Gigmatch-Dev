import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainPage() {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>gigmatch</Text>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.tagline}>Connect, Perform, Grow</Text>
        <Text style={styles.description}>
          Artists Find Gigs, Venues Book Talent — Simple And Fast!
        </Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login with Email</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tagline: {
    color: '#4CAF50', // Green for "Connect, Perform, Grow"
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3b82f6', // Blue for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#4CAF50',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
