import {useRef, useState} from 'react'

enum Operators {
  sum,
  subst,
  multi,
  div,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState('0')

  const lastOperatorRef = useRef<Operators>()

  const handleClean = () => {
    setNumber('0')
    setPreviousNumber('0')
  }

  const handleConcatNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber)
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber)
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber)
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number)
      } else {
        setNumber(number + textNumber)
      }
    } else {
      setNumber(number + textNumber)
    }
  }

  const handlePositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  const handleDelete = () => {
    let negative = ''
    let tempNumber = number

    if (number.includes('-')) {
      negative = '-'
      tempNumber = number.substr(1)
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1))
    } else {
      setNumber('0')
    }

    setNumber(number.slice(0, -1))
  }

  const handlePreviousNumber = () => {
    if (number.endsWith('-')) {
      setPreviousNumber(number.slice(0, -1))
    } else {
      setPreviousNumber(number)
    }
    setNumber('0')
  }

  const handleDiv = () => {
    handlePreviousNumber()
    lastOperatorRef.current = Operators.div
  }

  const handleMulti = () => {
    handlePreviousNumber()
    lastOperatorRef.current = Operators.multi
  }

  const handleSubst = () => {
    handlePreviousNumber()
    lastOperatorRef.current = Operators.subst
  }

  const handleSum = () => {
    handlePreviousNumber()
    lastOperatorRef.current = Operators.sum
  }

  const handleCalculate = () => {
    const number1 = Number(number)
    const number2 = Number(previousNumber)

    switch (lastOperatorRef.current) {
      case Operators.sum:
        setNumber(`${number1 + number2}`)
        break
      case Operators.subst:
        setNumber(`${number2 - number1}`)
        break
      case Operators.multi:
        setNumber(`${number1 * number2}`)
        break
      case Operators.div: {
        if (number1 === 0) {
          setNumber('0')
          break
        }
        setNumber(`${number2 / number1}`)
        break
      }
      default:
        break
    }

    setPreviousNumber('0')
  }

  return {
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
  }
}
