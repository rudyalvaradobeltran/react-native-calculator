import React from 'react'
import {Text, View} from 'react-native'
import CalculatorButton from '../components/CalculatorButton'
import {useCalculator} from '../hooks/useCalculator'
import {styles} from '../theme/AppTheme'

const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    handleClean,
    handlePositiveNegative,
    handleDelete,
    handleConcatNumber,
    handleDiv,
    handleMulti,
    handleSubst,
    handleSum,
    handleCalculate,
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalculatorButton text="C" color="#9b9b9b" action={handleClean} />
        <CalculatorButton
          text="+/-"
          color="#9b9b9b"
          action={handlePositiveNegative}
        />
        <CalculatorButton text="del" color="#9b9b9b" action={handleDelete} />
        <CalculatorButton text="/" color="#ff9427" action={handleDiv} />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" action={handleConcatNumber} />
        <CalculatorButton text="8" action={handleConcatNumber} />
        <CalculatorButton text="9" action={handleConcatNumber} />
        <CalculatorButton text="X" color="#ff9427" action={handleMulti} />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" action={handleConcatNumber} />
        <CalculatorButton text="5" action={handleConcatNumber} />
        <CalculatorButton text="6" action={handleConcatNumber} />
        <CalculatorButton text="-" color="#ff9427" action={handleSubst} />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" action={handleConcatNumber} />
        <CalculatorButton text="2" action={handleConcatNumber} />
        <CalculatorButton text="3" action={handleConcatNumber} />
        <CalculatorButton text="+" color="#ff9427" action={handleSum} />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" large action={handleConcatNumber} />
        <CalculatorButton text="." action={handleConcatNumber} />
        <CalculatorButton text="=" color="#ff9427" action={handleCalculate} />
      </View>
    </View>
  )
}

export default CalculatorScreen
