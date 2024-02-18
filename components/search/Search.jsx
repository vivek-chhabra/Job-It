import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import {
    ActivityIndicator,
    FlatList,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

import { ScreenHeaderBtn, NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from '../../styles/search';
import useFetch from '../../hooks/useFetch';

const Stack = createNativeStackNavigator();

const JobSearch = ({}) => {
    const { params } = useRoute();
    const { query } = params;

    const [page, setPage] = useState(1);

    const {
        isLoading: searchLoader,
        error: searchError,
        data: searchResult,
        fetchData
    } = useFetch('search');

    const handlePagination = direction => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1);
            fetchData({ query, num_pages: page });
        } else if (direction === 'right') {
            setPage(page + 1);
            fetchData({ query, num_pages: page });
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData({
                query,
                num_pages: page
            });
        }, [])
    );

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingBottom: SIZES.xxLarge + 15
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: ''
                }}
            />

            <FlatList
                data={searchResult}
                contentContainerStyle={styles.searchResultContainer}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() =>
                            router.push(`/job-details/${item.job_id}`)
                        }
                    />
                )}
                keyExtractor={item => item.job_id}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{query}</Text>
                            <Text style={styles.noOfSearchedJobs}>
                                Here are the current jobs available for you.
                            </Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator
                                    size="large"
                                    color={COLORS.primary}
                                    style={{ marginTop: 50 }}
                                />
                            ) : (
                                searchError && (
                                    <Text style={styles.error}>
                                        Oops something went wrong
                                    </Text>
                                )
                            )}
                        </View>
                    </>
                )}
            />
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.paginationButton}
                    onPress={() => handlePagination('left')}
                >
                    <Image
                        source={icons.chevronLeft}
                        style={styles.paginationImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={styles.paginationTextBox}>
                    <Text style={styles.paginationText}>{page}</Text>
                </View>
                <TouchableOpacity
                    style={styles.paginationButton}
                    onPress={() => handlePagination('right')}
                >
                    <Image
                        source={icons.chevronRight}
                        style={styles.paginationImage}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default JobSearch;
