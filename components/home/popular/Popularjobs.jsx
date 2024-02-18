import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';

import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { PressableOpacity } from 'react-native-pressable-opacity';
import styles from './popularjobs.style';

const Popularjobs = ({ data, activeJobType }) => {
    const [selectedData, setSelectedData] = useState(null);

    const navigation = useNavigation();

    const handleSelectedJob = item => {
        setSelectedData(item);
        navigation.navigate('JobDetails', { data: item });
        
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popularjobs</Text>
                <PressableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </PressableOpacity>
            </View>
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
                contentContainerStyle={{ flexDirection: 'row' }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </View>
    );
};

export default Popularjobs;
