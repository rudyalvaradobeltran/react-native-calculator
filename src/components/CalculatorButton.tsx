import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../theme/AppTheme'

interface Props {
  text: string
  color: string
}

const CalculatorButton = ({text, color = '#2d2d2d'}: Props) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  )
}

export default CalculatorButton
