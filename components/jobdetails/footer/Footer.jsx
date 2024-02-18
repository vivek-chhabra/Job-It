import { View, Text, Image, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';

import styles from './footer.style';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { icons } from '../../../constants';
import { getDataFromStorage, isFav } from '../../../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = ({ url, handleFavJobs, isFavJob }) => {
    // const [favJobs, setFavJobs] = useState([]);
    // const [isFavJob, setIsFavJob] = useState(false);

    // useEffect(() => {
    //     getDataFromStorage('favJobs').then(res => {
    //         // setFavJobs(res);
    //         // console.log(res, 'here is the res');
    //     });
    //     // setIsFavJob(isFav(data, favJobs));
    // }, [isFavJob]);

    return (
        <View style={styles.container}>
            <PressableOpacity
                style={styles.likeBtn(isFavJob)}
                onPress={handleFavJobs}
            >
                <Image
                    source={icons.heartOutline}
                    resizeMethod="contain"
                    style={styles.likeBtnImage(isFavJob)}
                />
            </PressableOpacity>
            <PressableOpacity
                style={styles.applyBtn}
                onPress={() => Linking.openURL(url)}
            >
                <Text style={styles.applyBtnText}>Apply for Job</Text>
            </PressableOpacity>
        </View>
    );
};

export default Footer;
