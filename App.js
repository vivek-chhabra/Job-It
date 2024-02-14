import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';

import { ScreenHeaderBtn } from './components';
import JobDetails from './screens/JobDetails';
import { COLORS, icons } from './constants';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
    // function MyDrawer() {
    //     return (
    //         <Drawer.Navigator>
    //             <Drawer.Screen name="Profile" />
    //             <Drawer.Screen name="Saved" />
    //             <Drawer.Screen name="Job Applications" />
    //             <Drawer.Screen name="Notifications" />
    //             <Drawer.Screen name="About" />
    //             <Drawer.Screen name="Settings" />
    //             <Drawer.Screen name="Help & Support" />
    //         </Drawer.Navigator>
    //     );
    // }

    // function toggleDrawer(navigation) {
    //     // navigation.openDrawer();
    //     console.log(navigation.openDrawer);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={({ navigation }) => ({
                                headerShadowVisible: false,
                                headerTitle: '',
                                headerLeft: () => (
                                    <ScreenHeaderBtn
                                        iconUrl={icons.menu}
                                        dimension="60%"
                                        // handlePress={() =>
                                        //     navigation.openDrawer()
                                        // }
                                    />
                                ),
                                headerRight: () => (
                                    <ScreenHeaderBtn
                                        iconUrl={icons.profile}
                                        dimension="100%"
                                    />
                                )
                            })}
                        />
                        <Stack.Screen
                            name="JobDetails"
                            component={JobDetails}
                            options={({ navigation }) => ({
                                headerShadowVisible: false,
                                headerTitle: 'Job Details',
                                headerTitleAlign: 'center',
                                headerRight: () => (
                                    <ScreenHeaderBtn
                                        iconUrl={icons.share}
                                        dimension="60%"
                                        color={COLORS.secondary}
                                    />
                                ),
                                animation: 'slide_from_right',
                                headerTintColor: COLORS.secondary,
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
