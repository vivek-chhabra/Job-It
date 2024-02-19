import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { useRoute } from '@react-navigation/native';
import React from 'react';

import { COLORS, icons, SIZES } from '../../../constants';
import styles from './welcome.style';

const Welcome = ({
    setQuery,
    query,
    onsubmit,
    activeJobType,
    setActiveJobType,
    jobTitles,
    inputErr,
    setInputErr
}) => {
    const router = useRoute();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hey Seeker</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={
                            inputErr ? styles.errorInput : styles.searchInput
                        }
                        value={query}
                        cursorColor={COLORS.primary}
                        placeholder={
                            inputErr ? inputErr : 'What are you looking for?'
                        }
                        placeholderTextColor={inputErr ? 'red' : COLORS.gray2}
                        onChangeText={input => {
                            setInputErr('');
                            setQuery(input);
                        }}
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
    );
};

export default Welcome;
