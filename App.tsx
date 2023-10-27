import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [isNameVisible, setNameVisibility] = useState(false);

  const toggleNameVisibility = () => {
    setNameVisibility(!isNameVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Zadanie 2</Text>
      <TouchableOpacity onPress={toggleNameVisibility} style={styles.button}>
        <Text style={styles.buttonText}>
          {isNameVisible ? 'Ukryj' : 'Pokaż'}
        </Text>
      </TouchableOpacity>
      {isNameVisible && (
        <View style={styles.nameContainer}>
          <Text style={styles.nameText2}>Nazywam się</Text>
          <Text style={styles.nameText}>Jakub Jędrychowski</Text>
        </View>
      )}
    </View>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  nameContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  nameText2: {
    color: 'black',
    fontSize: 18,
  },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});