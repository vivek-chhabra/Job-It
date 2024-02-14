import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'

import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants'
import { PressableOpacity } from 'react-native-pressable-opacity'

const jobTitles = ['All', 'Full-time', 'Part-Time', 'Contractor']

const Welcome = ({ setQuery, query, onsubmit }) => {
    const [activeJobType, setActiveJobType] = useState(jobTitles[0])

    const router = useRoute()

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Adrian</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={query}
                        cursorColor={COLORS.primary}
                        placeholder="What are you looking for?"
                        onTextInput={input => setQuery(input)}
                    />
                </View>
                <PressableOpacity style={styles.searchBtn} onPress={onsubmit}>
                    <Image
                        source={icons.search}
                        style={styles.searchBtnImage}
                        resizeMethod="contain"
                    />
                </PressableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ gap: SIZES.small }}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10 }}
            >
                {jobTitles.map((title, idx) => (
                    <PressableOpacity
                        style={styles.tab(activeJobType, title)}
                        onPress={() => setActiveJobType(title)}
                        key={idx}
                    >
                        <Text style={styles.tabText(activeJobType, title)}>
                            {title}
                        </Text>
                    </PressableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Welcome
