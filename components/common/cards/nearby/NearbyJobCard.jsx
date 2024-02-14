import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { PressableOpacity } from 'react-native-pressable-opacity'
import {
  checkImgUrl,
  truncateText,
  truncateTextWithWords
} from '../../../../utils/utils'
import { useNavigation } from '@react-navigation/native'

const NearbyJobCard = ({ job }) => {
  const navigation = useNavigation()

  const handleNavigate = data => {
    navigation.navigate('JobDetails', { data })
  }

  return (
    <PressableOpacity
      style={styles.container}
      onPress={() => handleNavigate(job)}
    >
      <PressableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job.employer_logo
              ? job.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </PressableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{truncateTextWithWords(job.job_title, 9) }</Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </PressableOpacity>
  )
}

export default NearbyJobCard
