import { View, Text, TextInput, Image, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";
import { PressableOpacity } from "react-native-pressable-opacity";

const jobTitles = ["Full-time", "Part-Time", "Contractor"];

const Welcome = () => {
    const [query, setQuery] = useState("");
    const [activeJobType, setActiveJobType] = useState(jobTitles[0]);

    const router = useRoute();

    const onsubmit = () => {
        alert("query");
    };

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Adrian</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput} value={query} cursorColor={COLORS.primary} placeholder="Search Here!" onTextInput={(input) => setQuery(input)} />
                </View>
                <PressableOpacity style={styles.searchBtn} onPress={onsubmit}>
                    <Image source={icons.search} style={styles.searchBtnImage} resizeMethod="contain" />
                </PressableOpacity>
            </View>
            <FlatList
                data={jobTitles}
                renderItem={({ item }) => (
                    <PressableOpacity style={styles.tab(activeJobType, item)} onPress={() => setActiveJobType(item)}>
                        <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                    </PressableOpacity>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.tabsContainer}
            />
        </View>
    );
};

export default Welcome;
