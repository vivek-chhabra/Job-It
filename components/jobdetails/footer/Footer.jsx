import React from 'react'
import { View, Text, Image, Linking } from 'react-native'

import styles from './footer.style'
import { PressableOpacity } from 'react-native-pressable-opacity'
import { icons } from '../../../constants'

const Footer = ({ url }) => {
    return (
        <View style={styles.container}>
            <PressableOpacity style={styles.likeBtn}>
                <Image
                    source={icons.heartOutline}
                    resizeMethod="contain"
                    style={styles.likeBtnImage}
                />
            </PressableOpacity>
            <PressableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
                <Text style={styles.applyBtnText}>Apply for Job</Text>
            </PressableOpacity>
        </View>
    )
}

export default Footer
