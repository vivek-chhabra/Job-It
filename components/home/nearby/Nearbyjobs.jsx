import { View, Text, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useFetch from '../../../hooks/useFetch'
import React from 'react'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { PressableOpacity } from 'react-native-pressable-opacity'
import { COLORS } from '../../../constants'
import styles from './nearbyjobs.style'

const Nearbyjobs = ({ setQuery, query }) => {
  const navigation = useNavigation();

  const { data, error, isLoading } = useFetch('search', {
    query: 'react native developer',
    num_pages: 1
  })

  const renderCardsContainer = () => {
    if (isLoading) 
      return <ActivityIndicator size="large" color={COLORS.tertiary} style={{height: 200}} />
    else if (error) return <Text>Something went wrong</Text>
    else {
      return (
        data?.map(job => <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={() => {}} />)
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <PressableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </PressableOpacity>
      </View>
      {renderCardsContainer()}
    </View>
  )
}

export default Nearbyjobs
