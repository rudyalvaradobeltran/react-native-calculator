import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../theme/AppTheme'

interface Props {
  text: string
  color?: string
  large?: boolean
  action: (textNumber: string) => void
}

const CalculatorButton = ({
  text,
  color = '#2d2d2d',
  large = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: large ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === '#9b9b9b' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CalculatorButton
