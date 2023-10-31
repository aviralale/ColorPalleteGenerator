import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Color1 from './components/Color1';
import Color2 from './components/Color2';
import Color3 from './components/Color3';
import Color4 from './components/Color4';
import Color5 from './components/Color5';

export default function App() {
  const [color1, setColor1] = useState('#6b717e');
  const [color2, setColor2] = useState('#efaac4');
  const [color3, setColor3] = useState('#ffc4d1');
  const [color4, setColor4] = useState('#ffe8e1');
  const [color5, setColor5] = useState('#d4dccd');
  
  const generateColor = () => {
    let hexRange = '0123456789ABCDEF';
    let newColors = [];

    for (let index = 0; index < 5; index++) {
      let newColor = '#';
      for (let i = 0; i < 6; i++) {
        const colorIndex = Math.floor(Math.random() * 16);
        newColor += hexRange[colorIndex];
      }
      newColors.push(newColor);
    }

    setColor1(newColors[0]);
    setColor2(newColors[1]);
    setColor3(newColors[2]);
    setColor4(newColors[3]);
    setColor5(newColors[4]);
  };

  return (
    <>
      <StatusBar backgroundColor="black" />
      <SafeAreaView style={styles.fullScreen}>
        <View style={styles.colorsContainer}>
          <Color1 bgColor1={color1} />
          <Color2 bgColor2={color2} />
          <Color3 bgColor3={color3} />
          <Color4 bgColor4={color4} />
          <Color5 bgColor5={color5} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.generateBtnContainer} onPress={generateColor}>
            <View style={styles.generateBtn}>
              <Text style={styles.generateBtnText}>Generate New Palette</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  buttonContainer: {
    zIndex: 2, // Place the button on top
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateBtnContainer: {
    backgroundColor: 'transparent',
    marginVertical: 5,
    paddingHorizontal: 100,
    paddingVertical: 18,
    borderRadius: 7,
    borderColor: 'blue',
    borderWidth: 1,
  },
  generateBtnText: {
    color: 'blue',
    textTransform: 'uppercase',
  },
  colorsContainer: {
    flex: 1, // Fill the remaining space with colors
    flexDirection: 'column', // Arrange colors vertically
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateBtn:{}
});
