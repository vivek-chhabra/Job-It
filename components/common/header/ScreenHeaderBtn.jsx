import React from "react";
import { Vie, Image } from "react-native";
import styles from "./screenheader.style";

import { PressableOpacity } from "react-native-pressable-opacity";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <PressableOpacity onPress={handlePress} style={styles.btnContainer}>
            <Image source={iconUrl} resizeMode="cover" style={styles.btnImg(dimension)} />
        </PressableOpacity>
    );
};

export default ScreenHeaderBtn;
