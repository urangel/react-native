import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  TextInput: {
    borderColor: '#222', 
    borderWidth: 1, 
    paddingLeft: 10, 
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'stretch',
    marginBottom: 10
  }
})

const ListInput = props => {

  const [input, setInput] = useState('')

  const listInputHandler = inputText => {
    setInput(inputText)
  }

  const handlePress = () => {
    props.addListHandler(input)
    setInput('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder='Item'
        onChangeText={listInputHandler}
        value={input}
      />
      <Button
        title='Add'
        onPress={handlePress}
      />
    </View>
  )
}

export default ListInput