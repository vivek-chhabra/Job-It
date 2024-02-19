import { View, Text, Image } from 'react-native';
import React from 'react';

import { PressableOpacity } from 'react-native-pressable-opacity';
import styles from './popularjobcard.style';
import {
    truncateText,
    truncateTextWithWords
} from '../../../../utils/utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
    return (
        <PressableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handleCardPress(item)}
        >
            <View style={styles.topRowContainer}>
                <PressableOpacity
                    style={styles.logoContainer(selectedJob, item)}
                >
                    <Image
                        source={{
                            uri: item.employer_logo
                                ? item.employer_logo
                                : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                        }}
                        resizeMode="contain"
                        style={styles.logoImage}
                    />
                </PressableOpacity>
                <Text style={styles.companyName} numberOfLines={2}>
                    {truncateText(item.employer_name, 45)}
                </Text>
            </View>

            <Text style={styles.jobName(selectedJob, item)}>
                {truncateTextWithWords(item.job_title, 7)}
            </Text>
            <Text style={styles.location}>
                {item.job_country && item.job_country}{' '}
                {item.job_city &&  item.job_city} | {item?.job_employment_type}
            </Text>
        </PressableOpacity>
    );
};

export default PopularJobCard;
