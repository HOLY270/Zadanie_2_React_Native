import React, { useEffect, useState } from 'react';
import * as ts from 'typescript';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TouchableCalculator from './components/TouchableCalculator';
import TouchableCalculatorLandscape from './components/TouchableCalculatorLandscape';
import SplashScreen from './components/SplashScreen';

function App(): JSX.Element {

  // Stan przechowujący aktualne wejście do kalkulatora
  const [input, updateInput] = useState("");
  const [isAdvancedMode, toggleAdvancedMode] = useState(false);
  const [appReady, setAppReady] = useState(false);
  
  const calc = (_input: string) => {
    const exp = ts.transpile(_input);
        try {
          updateInput(eval(exp));
        } catch (error) {
          updateInput('#ERR');
        }
  }

  // Inicjalizacja aplikacji po uruchomieniu
  useEffect(() => {
    const initializeApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setAppReady(true);
    };
    initializeApp();
  })

  const doThingy = (_type: String) => {
    console.log(_type);
    switch(_type) {
      case 'AC': 
        updateInput('');
        break;
      case '+/-':
        input.charAt(0) === '-' ? updateInput(input.slice(1)) : updateInput('-' + input);
        break;
      case 'x^2':
        calc(input + '*' + input);
        break;
      case 'x^3':
        calc(input + '*' + input + '*' + input);
        break;
      case 'sqrt':
        calc('Math.sqrt('+input+')');
        break;
      case 'cbrt':
        calc('Math.cbrt('+input+')');
        break;
      case 'sin':
        calc('Math.sin('+input+')');
        break;
      case 'cos':
        calc('Math.cos('+input+')');
        break;
      case 'tan':
        calc('Math.tan('+input+')');
        break;
      case 'pi':
        calc(input + '* 3.14');
        break;
      case '=':
        calc(input);
        break;
      case 'sinh':
        calc('Math.tan('+input+')');
        break;
      case 'cosh':
        calc('Math.tan('+input+')');
        break;
      case 'tanh':
        calc('Math.tan('+input+')');
        break;
      case 'log10':
        calc('Math.tan('+input+')');
        break;
      default:
        updateInput(input + _type);
        break;
    }
  }

  // Obsługa zmiany orientacji urządzenia
  useEffect(() => {
    const handleOrientationChange = () => {
      const {width, height} = Dimensions.get('window');
      if(width > height) {
        toggleAdvancedMode(true);
      } else {
        toggleAdvancedMode(false);
      }
    };
    Dimensions.addEventListener('change', handleOrientationChange);
  })

  return (
    <>
      {appReady ? (<View style={styles.calcMainContainer}>
        <View style={styles.calcResultContainer}><Text style={styles.textResult}>{input}</Text></View> 
        {!isAdvancedMode ? (
          <TouchableCalculator func={doThingy}/>
        ):(
          <TouchableCalculatorLandscape func={doThingy}/>
        )}
    </View>) : (<SplashScreen />)}
    </>
      
  );
}

const styles = StyleSheet.create({
  calcMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#454545',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    height: '100%',

  },
  calcButtonGray: {
    backgroundColor: '#636363',
    fontSize: 20,
    width: '25%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcButtonOrange: {
    backgroundColor: '#bf7632',
    fontSize: 20,
    width: '25%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcButtonGreen: {
    backgroundColor: '#316903',
    fontSize: 20,
    width: '25%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcBiggerButtonGray: {
    backgroundColor: '#636363',
    fontSize: 20,
    width: '50%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcButtonRed: {
    backgroundColor: '#c23525',
    fontSize: 20,
    width: '25%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcResultContainer: {
    fontSize: 20,
    width: '100%',
    height: '20%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  text: {
    color: '#ffffff',
    fontSize: 40,
    textAlign: 'center',
    display: 'flex',
    height: 72,
    paddingTop: 8,
  },
  textResult: {
    fontSize: 48,
    textAlign: 'right',
    display: 'flex',
    marginRight: 16,
    marginBottom: 8,
    height: 72,
    color: '#eeeeee'
  },

});

const landscapeStyles = StyleSheet.create({
  
  calcMainContainer: {
    width: '100%',
    backgroundColor: '#454545',
    height: '100%',
    display: 'flex',
    justifyContent:'flex-end',
  },
  rowContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '13%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  calcButtonGray: {
    backgroundColor: '#636363',
    fontSize: 10,
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    flexGrow: 1,
    width: '10%',
  },
  calcButtonDarkGray: {
    backgroundColor: '#555555',
    fontSize: 10,
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    flexGrow: 1,
    width: '10%',
  },
  calcButtonOrange: {
    backgroundColor: '#bf7632',
    fontSize: 10,
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    flexGrow: 1,
    width: '10%',
  },
  calcButtonGreen: {
    backgroundColor: '#316903',
    fontSize: 10,
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    flexGrow: 1,
    width: '10%',
  },
  calcBiggerButtonGray: {
    backgroundColor: '#636363',
    fontSize: 10,
    width: '20%',
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  calcButtonRed: {
    backgroundColor: '#c23525',
    fontSize: 10,
    height: 'auto',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
    flexGrow: 1,
    width: '10%',
  },
  calcResultContainer: {
    fontSize: 10,
    width: '100%',
    borderColor: '#454545',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    display: 'flex',

    height: 72,
    paddingTop: 8,
  },
  textResult: {
    color: '#ffffff',
    fontSize: 48,
    textAlign: 'right',
    display: 'flex',
    marginRight: 16,
    marginBottom: 8,
    height: 72,
  },
})

export default App;
