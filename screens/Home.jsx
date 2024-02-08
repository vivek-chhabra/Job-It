import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";

import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import { SIZES } from "../constants";

export default function Home() {
    const [query, setQuery] = useState("");

    return (
        <View style={styles.container}>
            <Welcome setQuery={setQuery} query={query} />
            <Popularjobs setQuery={setQuery} query={query} />
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
