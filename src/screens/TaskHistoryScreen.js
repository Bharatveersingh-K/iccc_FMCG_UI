import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BottomNavigator from '../navigation/BottomNavigator'
import TopBar from '../navigation/TopBar'

export default function TaskHistoryScreen() {
  return (
    <View style={styles.container}>
        <TopBar  />      
      <Text>TaskHistoryScreen</Text>
      <BottomNavigator />
    </View>
  )
}
const styles = StyleSheet.create({
        container: { flex: 1, backgroundColor: 'white' },
})