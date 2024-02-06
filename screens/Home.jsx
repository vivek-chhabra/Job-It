import { PressableOpacity } from "react-native-pressable-opacity";
import { View, StyleSheet } from "react-native";
import React from "react";

import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import { SIZES } from "../constants";

export default function Home() {
    return (
        <View style={styles.container}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: SIZES.small,
    },
});
