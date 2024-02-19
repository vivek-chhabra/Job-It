import { useFocusEffect } from '@react-navigation/native';
import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';

import { getDataFromStorage } from '../utils/utils';
import { NearbyJobCard } from '../components';
import { COLORS } from '../constants';

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
        <View style={styles.screen}>
            <FlatList
                data={favJobList}
                renderItem={({ item }) => renderFavJobs(item)}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        backgroundColor: COLORS.white,
        padding: 10,
        gap: 7
    }
});
