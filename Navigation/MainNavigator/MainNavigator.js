import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from '../DrawerNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})