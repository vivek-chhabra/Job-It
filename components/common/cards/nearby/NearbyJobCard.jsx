import { View, Text, Image } from 'react-native';
import React from 'react';

import { PressableOpacity } from 'react-native-pressable-opacity';
import { truncateTextWithWords } from '../../../../utils/utils';
import { useNavigation } from '@react-navigation/native';
import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job }) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('JobDetails', { data: job });
    };

    return (
        <PressableOpacity style={styles.container} onPress={handleNavigate}>
            <PressableOpacity style={styles.logoContainer}>
                <Image
                    source={{
                        uri: job.employer_logo
                            ? job.employer_logo
                            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                    }}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </PressableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName}>
                    {truncateTextWithWords(job.job_title, 9)}
                </Text>
                <Text style={styles.jobType}>
                    {job?.job_employment_type} | {job.job_city && job.job_city}
                    {job.job_country && ', ' + job.job_country} |{' '}
                    {job.job_is_remote ? 'Remote Job' : 'On Site'}
                </Text>
            </View>
        </PressableOpacity>
    );
};

export default NearbyJobCard;
