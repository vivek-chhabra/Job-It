import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';
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
