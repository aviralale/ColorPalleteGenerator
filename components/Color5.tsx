import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ColorProps {
    bgColor5: string,
}
export default function Color5({bgColor5}: ColorProps) {
  return (
    <View style={[
        styles.container,
        {
            backgroundColor: bgColor5
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
      ]}>{bgColor5}</Text>
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
  }
})