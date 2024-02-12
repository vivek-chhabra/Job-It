import { useRoute } from '@react-navigation/native'
import { View, Text } from 'react-native'
import React from 'react'

export default function JobDetails() {
  const { params } = useRoute()
  console.log(params.data)
  return (
    <View>
      <Text>{}</Text>
    </View>
  )
}
