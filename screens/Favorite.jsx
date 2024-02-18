import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { useFocusEffect } from '@react-navigation/native';
import { getDataFromStorage } from '../utils/utils';
import { NearbyJobCard } from '../components';

export default function Favorite() {
    const [favJobList, setFavJobList] = useState([]);

    const renderFavJobs = job => {
        return <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} />;
    };

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                const data = await getDataFromStorage('favJobs');
                setFavJobList(data);
            })();
        }, [])
    );

    return (
        <FlatList
            data={favJobList}
            renderItem={({ item }) => renderFavJobs(item)}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
        gap: 7,
    },
});
