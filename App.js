import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native'

import ListItem from './components/ListItem' 
import ListInput from './components/ListInput'

export default function App() {

  const [list, setList] = useState([{key: Math.random().toString(), value: 'first-item'}])

  const addListHandler = input => {
    setList( currentList =>  [...currentList, {key: Math.random().toString(), value: input}])
  }

  const styles = StyleSheet.create({
   
    screen: {
      padding: 50
    }
   
  })

  return (
    <View style={styles.screen}>
      <ListInput
        addListHandler={addListHandler}
      />
      <FlatList 
        data={list} 
        renderItem={itemData => (
          <ListItem item={itemData.item.value} />)} 
      />
    </View>
  );
}
