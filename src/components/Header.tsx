import React from 'react'
import logoImg from '../../assets/logo.png'
import { View, Image } from 'react-native'

export default function Header() {
  return (
    <View style={{ marginLeft: 10 }}>
      <Image source={logoImg} />
    </View>
  )
}
