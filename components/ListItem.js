import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ListItem = props => {

  const styles = StyleSheet.create({
    listItem:{
      padding: 10,
      marginBottom: 10,
      borderBottomColor: '#444',
      borderBottomWidth: 1,
      backgroundColor: '#eee',
      
    },
  })

  return (
    <View style={styles.listItem}>
      <Text >{props.item}</Text>
    </View>
  )
}

export default ListItem
