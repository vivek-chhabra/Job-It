import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import {
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

import { Nearbyjobs, Popularjobs, Welcome } from '../components';
import { COLORS, SIZES } from '../constants';

const jobTitles = ['All', 'Full-time', 'Part-Time', 'Contractor'];

export default function Home({ navigation }) {
    const [query, setQuery] = useState('');
    const [nearByJobs, setNearByJobs] = useState([]);
    const [popularJobs, setPopularJobs] = useState([]);
    const [activeJobType, setActiveJobType] = useState(jobTitles[0]);
    const [inputErr, setInputErr] = useState('');

    const onsubmit = () => {
        setQuery('');
        if (!query) return setInputErr('Search Field Should not be Empty!');
        if (query.length < 3) return setInputErr('Minimum 3 chars required!');

        navigation.navigate('SearchResult', { query });
    };

    const { isLoading, error, fetchData } = useFetch('search');

    useEffect(() => {
        const isAll = activeJobType === 'All';

        (async () => {
            const nearByJobs = await fetchData({
                query: isAll ? 'nearby jobs' : `${activeJobType} nearby jobs`,
                num_pages: 1
            });
            const popularJobs = await fetchData({
                query: isAll ? 'popular jobs' : `${activeJobType} popular jobs`,
                num_pages: 1
            });

            setNearByJobs(nearByJobs);
            setPopularJobs(popularJobs);
        })();
    }, [activeJobType]);

    const renderJobs = () => {
        if (isLoading) {
            return (
                <ActivityIndicator
                    size="large"
                    color={COLORS.tertiary}
                    style={{ height: 200 }}
                />
            );
        } else if (error)
            return (
                <View style={styles.errContainer}>
                    <Text style={styles.error}>Something went wrong..!</Text>
                </View>
            );
        else {
            return (
                <>
                    <Popularjobs
                        data={popularJobs}
                        activeJobType={activeJobType}
                    />
                    <Nearbyjobs
                        data={nearByJobs}
                        activeJobType={activeJobType}
                    />
                </>
            );
        }
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Welcome
                setQuery={setQuery}
                query={query}
                onsubmit={onsubmit}
                setActiveJobType={setActiveJobType}
                activeJobType={activeJobType}
                jobTitles={jobTitles}
                inputErr={inputErr}
                setInputErr={setInputErr}
            />
            {renderJobs()}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: SIZES.small
    },
    error: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary
    },
    errContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40
    }
});
