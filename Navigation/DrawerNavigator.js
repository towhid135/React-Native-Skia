import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Accordion from '../screens/Reanimated2/Accordion'
import Animated3DCard from '../components/Skia/Animated3DCard'
import DrawerScreens from '../constant/DrawerScreens'

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        {
          DrawerScreens.map((item,index) => {
            return <Drawer.Screen key={index} {...item} />
          })
        }
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})