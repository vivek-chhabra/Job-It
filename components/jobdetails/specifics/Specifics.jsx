import { View, Text } from 'react-native'
import React from 'react'

import styles from './specifics.style'

const Specifics = ({ title, points }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pointsContainer}>
                {points.map((point, idx) => (
                    <View key={point + idx} style={styles.pointWrapper}>
                        <View style={styles.pointDot} />
                        <Text style={styles.pointText}>{point}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Specifics
