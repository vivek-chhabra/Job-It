import { View, StyleSheet, ScrollView } from 'react-native'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'

import { Nearbyjobs, Popularjobs, Welcome } from '../components'
import { SIZES } from '../constants'

export default function Home() {
    const [query, setQuery] = useState('')

    const onsubmit = () => {
        if (!query) return alert('Search Field Should not be Empty!')
    }

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Welcome setQuery={setQuery} query={query} onsubmit={onsubmit} />
            <Popularjobs setQuery={setQuery} query={query} />
            <Nearbyjobs />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: SIZES.small
    }
})
