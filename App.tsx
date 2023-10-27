import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Błąd');
      }
      setDisplay('');
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('C')}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { flex: 2 }]}
            onPress={() => handleButtonPress('0')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('/')}
          >
            <Text style={styles.operationButtonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('*')}
          >
            <Text style={styles.operationButtonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('-')}
          >
            <Text style={styles.operationButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('+')}
          >
            <Text style={styles.operationButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
             style={[styles.button, { flex: 2}]}
            onPress={() => handleButtonPress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('.')}
          >
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('=')}
          >
            <Text style={styles.operationButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  displayContainer: {
    backgroundColor: 'lightgray',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  displayText: {
    color: 'black',
    fontSize: 56,
  },
  resultText: {
    fontSize: 56,
    color: 'black',
  },
  buttonContainer: {
    flex: 5,
    backgroundColor: 'lightgray',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
    borderWidth: 0.6,
    borderColor: 'gray',
  },
  operationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkorange',
    borderWidth: 0.6,
    borderColor: 'gray',
  },
  buttonText: {
    fontSize: 36,
    color: 'white',
  },
  operationButtonText: {
    fontSize: 36,
    color: 'white',
  },
});
