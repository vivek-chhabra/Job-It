import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'

import { Company, JobAbout, JobFooter, JobTabs, Specifics } from '../components'
import { COLORS, SIZES } from '../constants'
import { useState } from 'react'

const tabs = ['About', 'Qualifications', 'Responsibilities']

export default function JobDetails() {
    const [activeTab, setActiveTab] = useState(tabs[0])

    const { params } = useRoute()
    const { data } = params
    console.log(data)

    const displayTabContent = () => {
        switch (activeTab) {
            case 'About':
                return (
                    <JobAbout
                        info={data.job_description ?? 'No Data Provided'}
                    />
                )
                break
            case 'Qualifications':
                return (
                    <Specifics
                        title="Qualifications"
                        points={data.job_highlights?.Qualifications ?? ['N/A']}
                    />
                )
                break
            case 'Responsibilities':
                return (
                    <Specifics
                        title="Responsibilities"
                        points={
                            data.job_highlights?.Responsibilities ?? ['N/A']
                        }
                    />
                )
                break
        }
    }

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
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})
