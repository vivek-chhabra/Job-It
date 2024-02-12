import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import Home from "./screens/Home";
import "react-native-gesture-handler";

import { images, COLORS, SIZES, icons } from "./constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "./components";
import JobDetails from './screens/JobDetails';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShadowVisible: false,
                                headerTitle: "",
                                headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
                                headerRight: () => <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />,
                            }}
                        />
                        <Stack.Screen
                            name="JobDetails"
                            component={JobDetails}
                            options={{
                                headerShadowVisible: false,
                                headerTitle: "Job Details",
                                headerTitleAlign: 'center'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
