import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './popularjobcard.style'
import { PressableOpacity } from 'react-native-pressable-opacity'
import { checkImgUrl, truncateText } from '../../../../utils/utils'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <PressableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.topRowContainer}>
        <PressableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{
              uri: item.employer_logo
                ? item.employer_logo
                : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
            }}
            // source={{ uri: checkImgUrl(item.employer_logo) ? item.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </PressableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>
          {truncateText(item.employer_name, 21)}
        </Text>
      </View>

      <View>
        <Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </PressableOpacity>
  )
}

export default PopularJobCard
