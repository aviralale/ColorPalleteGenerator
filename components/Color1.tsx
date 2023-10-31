import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Clipboard from '@react-native-clipboard/clipboard';

interface ColorProps {
    bgColor1: string,
}
export default function Color1({bgColor1}: ColorProps) {
  // const copyToClipboard = () => {
  //   Clipboard.setString('hello world');
  // };
  return (
    <View style={[
        styles.container,
        {
            backgroundColor: bgColor1
        }
    ]
    }
    >
      <Text selectable={true} style={[
        styles.text,
        {
          textShadowColor: 'white', // Color of the text shadow
          textShadowOffset: { width: 1, height: 1 }, // Offset of the shadow
        }
      ]}>{bgColor1}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: '20%',
        // borderRightColor: 'black',
        // borderRightWidth: 1,
        width: 400,
        // flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18, // You can adjust the font size as needed
  },
    copyToClipboardtext: {
      fontWeight: 'bold',
      fontSize: 12, // You can adjust the font size as needed
  }
})