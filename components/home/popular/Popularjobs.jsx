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
        query: 'Popular Jobs',
        num_pages: 1
    })

    const handleSelectedJob = item => {
        setSelectedData(item)
    }

    const renderCardsContainer = () => {
        if (isLoading)
            return (
                <ActivityIndicator
                    size="large"
                    color={COLORS.tertiary}
                    style={{ height: 200 }}
                />
            )
        else if (error) return <Text>Something went wrong</Text>
        else {
            return (
                <FlatList
                    data={data}
                    keyExtractor={({ item }) => item}
                    renderItem={({ item }) => (
                        <PopularJobCard
                            item={item}
                            selectedData={selectedData}
                            handleCardPress={() => handleSelectedJob(item)}
                        />
                    )}
                    contentContainerStyle={{ flexDirection: 'row', gap: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
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
