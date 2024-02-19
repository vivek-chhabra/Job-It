import { PressableOpacity } from 'react-native-pressable-opacity'
import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import styles from './nearbyjobs.style'

const Nearbyjobs = ({ data, activeJobType }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Nearby Jobs</Text>
                <PressableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </PressableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ marginBottom: 30 }}>
                {data?.map(job => (
                    <NearbyJobCard
                        job={job}
                        key={`nearby-job-${job?.job_id}`}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Nearbyjobs
