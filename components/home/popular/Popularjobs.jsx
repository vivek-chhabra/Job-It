import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import useFetch from '../../../hooks/useFetch'
import React, { useState } from 'react'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { PressableOpacity } from 'react-native-pressable-opacity'
import { COLORS } from '../../../constants'
import styles from './popularjobs.style'

const Popularjobs = ({ setQuery, query }) => {
  const [selectedData, setSelectedData] = useState(null)

  const { data, error, isLoading } = useFetch('search', {
    query: 'react native developer',
    num_pages: 1
  })

  const handleSelectedJob = (item) => {
    setSelectedData(item)
  }

  // console.log(data, 'dataf')

  const renderCardsContainer = () => {
    if (isLoading)
      return <ActivityIndicator size="small" color={COLORS.tertiary} />
    else if (error) return <Text>Something went wrong</Text>
    else {
      return (
        <FlatList
          data={data}
          keyExtractor={({ item }) => item}
          renderItem={({ item }) => <PopularJobCard item={item} selectedData={selectedData} handleCardPress={() => handleSelectedJob(item)} />}
          horizontal={true}
          contentContainerStyle={{ flexDirection: 'row', gap: 20 }}
        />
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <PressableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </PressableOpacity>
      </View>
      {renderCardsContainer()}
    </View>
  )
}

export default Popularjobs
