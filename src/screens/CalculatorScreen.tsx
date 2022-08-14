import React from 'react'
import {Text, View} from 'react-native'
import CalculatorButton from '../components/CalculatorButton'
import {styles} from '../theme/AppTheme'

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>
      <View style={styles.row}>
        <CalculatorButton text="C" color="#9b9b9b" />
        <CalculatorButton text="+/-" color="#9b9b9b" />
        <CalculatorButton text="del" color="#9b9b9b" />
        <CalculatorButton text="/" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" />
        <CalculatorButton text="8" />
        <CalculatorButton text="9" />
        <CalculatorButton text="X" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" />
        <CalculatorButton text="5" />
        <CalculatorButton text="6" />
        <CalculatorButton text="-" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" />
        <CalculatorButton text="2" />
        <CalculatorButton text="3" />
        <CalculatorButton text="+" color="#ff9427" />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" large />
        <CalculatorButton text="." />
        <CalculatorButton text="=" color="#ff9427" />
      </View>
    </View>
  )
}

export default CalculatorScreen
