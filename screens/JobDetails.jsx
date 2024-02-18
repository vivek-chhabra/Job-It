import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StyleSheet } from 'react-native';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import React from 'react';

import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    Specifics
} from '../components';
import { COLORS, SIZES } from '../constants';
import { useState } from 'react';
import { getDataFromStorage, isFav } from '../utils/utils';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

export default function JobDetails() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [favJobsList, setFavJobsList] = useState([]);
    const [isFavJob, setIsFavJob] = useState(false);

    const { params } = useRoute();
    const { data } = params;

    const handleFavJobs = async () => {
        const {
            employer_name,
            job_title,
            job_google_link,
            job_description,
            job_city,
            job_state,
            job_employment_type,
            job_highlights,
            job_country,
            employer_logo,
            job_id,
            job_is_remote
        } = data;

        const dataToSet = {
            employer_name,
            job_title,
            job_google_link,
            job_description,
            job_city,
            job_state,
            job_employment_type,
            job_highlights,
            job_country,
            employer_logo,
            job_id,
            job_is_remote
        };

        const favJobsList = (await getDataFromStorage('favJobs')) || [];
        const isFavJob = isFav(data, favJobsList);

        try {
            if (!isFavJob) {
                const res = JSON.stringify([dataToSet, ...favJobsList]);
                await AsyncStorage.setItem('favJobs', res);
                setIsFavJob(true);
            } else {
                let currentJobs = favJobsList.filter(
                    item => item.job_id !== data.job_id
                );
                currentJobs = JSON.stringify(currentJobs);
                await AsyncStorage.setItem('favJobs', currentJobs);
                setIsFavJob(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useFocusEffect(() => {
        (async () => {
            const favJobsList = (await getDataFromStorage('favJobs')) || [];
            setFavJobsList(favJobsList);
            console.log(favJobsList, 'favjoblist');
        })();

        const isFavJob = isFav(data, favJobsList);
        setIsFavJob(isFavJob);
    });

    const displayTabContent = () => {
        switch (activeTab) {
            case 'About':
                return (
                    <JobAbout
                        info={data.job_description ?? 'No Data Provided'}
                    />
                );
                break;
            case 'Qualifications':
                return (
                    <Specifics
                        title="Qualifications"
                        points={data.job_highlights?.Qualifications ?? ['N/A']}
                    />
                );
                break;
            case 'Responsibilities':
                return (
                    <Specifics
                        title="Responsibilities"
                        points={
                            data.job_highlights?.Responsibilities ?? ['N/A']
                        }
                    />
                );
                break;
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <ScrollView
                contentContainerStyle={{
                    padding: SIZES.medium,
                    paddingBottom: 70
                }}
                showsVerticalScrollIndicator={false}
            >
                <Company
                    companyLogo={data.employer_logo}
                    jobTitle={data.job_title}
                    companyName={data.employer_name}
                    location={`${data.job_city && data.job_city + ','} ${
                        data.job_country
                    }`}
                />
                <JobTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {displayTabContent()}
            </ScrollView>
            <JobFooter
                url={
                    data?.job_google_link ??
                    'https://careers.google.com/jobs/results'
                }
                handleFavJobs={handleFavJobs}
                isFavJob={isFavJob}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
});
