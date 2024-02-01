import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import { View } from "react-native";
import React from "react";

import { PressableOpacity } from "react-native-pressable-opacity";

export default function Home() {
    return (
        <View>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
    );
}
